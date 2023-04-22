def count(vals):
    if not isinstance(vals, list):
        return -1
    else:
        count = 0
        for x in vals:
            count += 1
        
        return count
    
def getMin(vals):
    
    for i in range(len(vals)):
        if isinstance(vals[i],str):
            vals[i]= int(vals[i])
    
    min = vals[0]
    for x in vals:
        if x < min:
            min = x
    return min
