def subtract(a, b):
    result = a - b
    return result

result = subtract(5, 3)
print(result)

# This function accepts 4 parameters: name, age, height, and weight.
def create_introduction(name, age, height, weight):
    first_part = "Your name is " + name + " and you are " + age + " years old."
    second_part = "You are " + height + " meteres tall and weigh " + weight + " kilograms."
    full_intro = first_part + " " + second_part
    return full_intro

my_name = "John"
my_age = "30"
intro = create_introduction(my_name, my_age, "1.8", "80")
print(intro)

