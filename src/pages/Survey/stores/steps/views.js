export default self => ({
    isStepValid(step) {
        switch (step) {
            case 1:
                return self.stepsData[step].name
                    && self.stepsData[step].city
                    && self.stepsData[step].job
                    && self.stepsData[step].position;
                
            case 2:
                return self.stepsData[step].area;
                
            case 3:
                return self.stepsData[step].length;
                
            case 4:
                return self.stepsData[step].every(item => item.value);
        }
    },
});