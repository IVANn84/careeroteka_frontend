export default self => ({
    isStepValid(step) {
        switch (step) {
            case 1:
                return self.stepsData[step].firstName
                    && self.stepsData[step].lastName
                    && self.stepsData[step].city
                    && self.stepsData[step].telegramUsername;
                
            case 2:
                return self.stepsData[step].id;
        }
    },
});