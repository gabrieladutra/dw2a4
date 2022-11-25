export const validations = {
    nome(value) {
        let model = /^[a-zA-Z]+ [a-zA-Z]+$/
        let validName = value.match(model)
        return validName

    },
    email(value) {
        var emailModel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return value.match(emailModel);
    },
    data(value) {
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (!(date_regex.test(value))) {
            return false;
        }
    },
    cpf(value) {
        value = value.replace(/[^\d]+/g, '');
        if (value == '') return false;
        // Elimina values invalidos conhecidos	
        if (value.length != 11 ||
            value == "00000000000" ||
            value == "11111111111" ||
            value == "22222222222" ||
            value == "33333333333" ||
            value == "44444444444" ||
            value == "55555555555" ||
            value == "66666666666" ||
            value == "77777777777" ||
            value == "88888888888" ||
            value == "99999999999")
            return false;
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(value.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(value.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(value.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(value.charAt(10)))
            return false;
        return true;

    }
}