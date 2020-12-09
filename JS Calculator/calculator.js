var num1 = prompt("Enter First Number: ");
        var num2 = prompt("Enter Second Number: ");

        num1 = parseInt(num1, 10);
        num2 = parseInt(num2, 10);

        var sum, sub, multiply, division, divisor;

        sum = num1+num2;
        document.write("Additon : "+ num1 + "+" + num2 + "=" + sum + "<br>");

        sub = num1-num2;
        document.write("Subtraction : "+ num1 + "-" + num2 + "=" + sub + "<br>");
        
        multiply = num1*num2;
        document.write("Multipication : "+ num1 + "*" + num2 + "=" + multiply + "<br>");
        
        division = num1/num2;
        document.write("Division : "+ num1 + "/" + num2 + "=" + division + "<br>");

        divisor = num1 % num2;
        document.write("Divisor : "+ num1 + "%" + num2 + "=" + divisor + "<br>");