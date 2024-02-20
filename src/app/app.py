def reverse_string(str):
    length=len(str)-1
    reversed=''
    while length>-1:
        reversed=reversed+str[length]
    print(length)
reverse_string("hello everyone")