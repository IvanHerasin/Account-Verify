 function moveToNext(field, index) {
       
            if (field.value.length >= 1) {
                const inputs = document.querySelectorAll('.otp-input');
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        
            if (field.value.length > 1) {
                field.value = field.value.slice(0, 1);
            }
        }