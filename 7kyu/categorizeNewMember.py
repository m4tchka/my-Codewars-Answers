"https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python"

def open_or_senior(data):
    categories = []
    for member in data:
        if member[0] >= 55 and member[1]>7:
            categories.append("Senior")
        else:
            categories.append("Open")
    return categories


def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for (age,handicap) in data]

'''
List comprehension solution - condition with corresponding values in first part, for each TUPLE of the inputted list.
Tuples are expected in the input and can be used in the condition as above.
'''
