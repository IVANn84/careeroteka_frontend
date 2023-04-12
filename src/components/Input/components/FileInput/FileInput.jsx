import React, {useId, useRef, useState} from 'react';
import mime from 'mime-types';
import {XMarkIcon} from '@heroicons/react/24/solid';

import Typography from 'Component/Typography';

import ConfirmRemoveModal from './components/modals/ConfirmRemove';
import {useModal} from 'Hook/useModal';

export default function FileInput({
    multiple = false,
    buttonText,
    accept,
    value,
    isClearable,
    error,
    children,
    
    onChange,
    
    classes,
}) {
    const inputId = useId();
    
    const [typeError, setTypeError] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    
    const {
        isOpen: isConfirmRemoveModalOpen,
        open: openConfirmRemoveModal,
        close: closeConfirmRemoveModal,
    } = useModal();
    
    // При наведении файлом на инпут
    const handleDrag = event => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === 'dragenter' || event.type === 'dragover') {
            setDragActive(true);
        } else if (event.type === 'dragleave') {
            setDragActive(false);
        }
    };
    
    // При перетаскивании файла
    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            const acceptTypes = accept.split(',').map(item => item.trim());
            
            for (const file of event.dataTransfer.files) {
                if (!acceptTypes.includes(`.${mime.extension(file.type)}`)) {
                    setTypeError('Неправильный формат');
                    return;
                }
            }
            
            setTypeError(null);
            onChange(multiple
                ? event.dataTransfer.files
                : event.dataTransfer.files[0]);
        }
    };
    
    const handleChange = event => {
        event.preventDefault();
        if (event.target.files && event.target.files[0]) {
            setTypeError(null);
            onChange(multiple
                ? event.target.files
                : event.target.files[0]);
        }
    };
    
    const onButtonClick = () => {
        inputRef.current.click();
    };
    
    const onDownload = () => {
        const blob = new Blob([value], {type: value.type});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = value.name;
        link.href = url;
        link.click();
    };
    
    const onClear = () => {
        onChange(null);
        closeConfirmRemoveModal();
    };
    
    return (
        <div className={classes.container}>
            {!value
                ? (
                    <>
                        <form
                            className={classes.form}
                            onDragEnter={handleDrag}
                            onSubmit={event => event.preventDefault()}>
                            <input
                                ref={inputRef}
                                type='file'
                                className={classes.input}
                                id={inputId}
                                multiple={multiple}
                                accept={accept}
                                onChange={handleChange}/>
                            <label
                                htmlFor={inputId}
                                className={`${classes.label} ${dragActive
                                    ? classes.dragActive
                                    : ''} ${typeError || error
                                    ? classes.labelError
                                    : ''}`}>
                                <Typography
                                    variant='B2'
                                    variantMobile='B2'>
                                    {children}
                                </Typography>
                            </label>
                            {dragActive && (
                                <div
                                    className={classes.dragFileElement}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}/>
                            )}
                        </form>
                        {(typeError || error && typeof error === 'string') &&
                            <div
                                className={classes.error}
                                dangerouslySetInnerHTML={{__html: typeError || error}}/>
                        }
                        <Typography
                            variant='B2'
                            variantMobile='B2'
                            className={classes.button}
                            onClick={onButtonClick}>
                            {buttonText}
                        </Typography>
                    </>
                )
                : (
                    <>
                        <div className={classes.valueContainer}>
                            <Typography
                                variant='B2'
                                variantMobile='B2'
                                onClick={onDownload}>
                                {value.name}
                            </Typography>
                            {isClearable && (
                                <XMarkIcon onClick={openConfirmRemoveModal}/>
                            )}
                        </div>
                        <ConfirmRemoveModal
                            isDisplayed={isConfirmRemoveModalOpen}
                            onConfirm={onClear}
                            onDecline={closeConfirmRemoveModal}/>
                    </>
                )}
        </div>
    );
}