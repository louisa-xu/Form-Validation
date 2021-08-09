function validateName(elem)
{
    let valid = true;
    let inputValue = elem.value.trim();

    document.querySelector("#error-msg1").setAttribute("hidden", true);

    if (inputValue[0] === inputValue[0].toUpperCase())
    {
        inputValue = inputValue.toUpperCase();
        for (let i = 0; i < inputValue.length; i++)
        {
            if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z")
            {
                valid = false;
            }
        }

        if (!valid)
        {
            document.querySelector("#error-msg1").removeAttribute("hidden");
            document.querySelector("#error-msg1").innerHTML = "Name must be all alphabet letters.";
            elem.focus();
        }
    }
    else
    {
        valid = false;
        document.querySelector("#error-msg1").removeAttribute("hidden");
        document.querySelector("#error-msg1").innerHTML = "Name must start with a capital letter.";
        elem.focus();
    }

    return valid;
}


function validatePwd()
{
    let valid = false;
    let pwd = document.querySelector("#password");
    let input1 = pwd.value.trim();
    let pwd2 = document.querySelector("#confirm-pwd");
    let input2 = pwd2.value.trim();
    let startWithAlpha = /^[a-zA-Z]/.test(input1);

    document.querySelector("#error-msg2").setAttribute("hidden", true);

    if (input1.length != 6)
    {
        document.querySelector("#error-msg2").removeAttribute("hidden");
        document.querySelector("#error-msg2").innerHTML = "Password must be 6 characters long.";
        pwd.focus();
    }
    else if (!startWithAlpha)
    {
        document.querySelector("#error-msg2").removeAttribute("hidden");
        document.querySelector("#error-msg2").innerHTML = "Password must start with a letter.";
        pwd.focus();
    }
    else
    {
        const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let digitCount = 0, UpperCount = 0;

        for (let i = 0; i < input1.length; i++)
        {
            if (!isNaN(input1[i]))
            {
                digitCount++;
            }
            else if (string.indexOf(input1[i]) >= 0)
            {
                UpperCount++;
            }
        }
        if (digitCount < 1 || UpperCount < 1)
        {
            document.querySelector("#error-msg2").removeAttribute("hidden");
            document.querySelector("#error-msg2").innerHTML = "Password must contain at least 1 digit and 1 uppercase letter.";
            pwd.focus();
        }
        else
        {
            if (input2 != input1)
            {
                document.querySelector("#error-msg2").removeAttribute("hidden");
                document.querySelector("#error-msg2").innerHTML = "Passwords do not match.";
                pwd2.focus();
            }
            else
            {
                valid = true;
            }
        }
    }

    return valid;
}

function validateUsername()
{
    let valid = false;
    let username = document.querySelector("#username");
    let input = username.value.trim();
    document.querySelector("#error-msg3").setAttribute("hidden", true);

    if (input.length < 6)
    {
        document.querySelector("#error-msg3").removeAttribute("hidden");
        document.querySelector("#error-msg3").innerHTML = "Username must have at least 6 characters.";
        username.focus();
        
    }
    else
    {
        if(!/^[a-zA-Z]/.test(input))
        {
            document.querySelector("#error-msg3").removeAttribute("hidden");
            document.querySelector("#error-msg3").innerHTML = "Username must start with a letter.";
            username.focus();
        }
        else
        {
            valid = true;
        }
    }

    return valid;
}


function formValidation()
{
    let fname = document.querySelector("#first-name");
    let lname = document.querySelector("#last-name");
    validateName(fname);
    validateName(lname);
    validatePwd();
    validateUsername(); 

    let valid = validateName(fname) && validateName(lname) && validatePwd() && validateUsername();

    if (valid)
    {
        alert("Form is submitted successfully.");
    }

    return valid;
}


