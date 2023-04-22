def count(vals):
    if not isinstance(vals, list):
        return -1
    else:
        count = 0
        for x in vals:
            count += 1
        
        return count