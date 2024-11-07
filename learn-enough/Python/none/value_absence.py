def find_item(lst, target):
    for item in lst:
        if item == target:
            return item
    return None

print(find_item([1,2,3], None))

