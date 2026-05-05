x = input("What is the first number? ")
print(f"Number is {x}!")
y = input("What is the second number? ")
print(f"Number is {y}!")

int_x = int(x)
int_y = int(y)

add = int_x + int_y;
subtract = int_x - int_y;
multiply = int_x * int_y;
divide = int_x / int_y;
remainder = int_x % int_y;

option = input("Which operation would you like to use? type addition, subtract, multiply, divide or remainder ")
option_lowercase = option.lower()
print(f"You have selected {option_lowercase}!")

if option_lowercase == "addition":
    print(f"The addition result is {add}")
elif option_lowercase == "subtract":
    print(f"The subtraction result is {subtract}")
elif option_lowercase == "multiply":
    print(f"The multiplied result is {multiply}")
elif option_lowercase == "divide":
    print(f"The divided result is {divide}")
elif option_lowercase == "remainder":
    print(f"The remainder result is {remainder}")
else:
    print("Please try again, error following input.")
    

    
    

