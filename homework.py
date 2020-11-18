

a1 = {
    100.4,
    124.3,
    122.1,
    167.3,
    180.3,
    199.1,
    210.1,
    167.2,
    155.4,
    143.1
}

def roundAverageElevation(d):

    total_sum = 0
    total_n = len(d)
    

    for i in d:
        total_sum = total_sum + i
    
    average = round(total_sum / total_n, -1)

    print(total_sum)
    print(total_n)
    print(average)


print(roundAverageElevation(a1))
