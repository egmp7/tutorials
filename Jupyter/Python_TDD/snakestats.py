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

def median (vals):
    mid = len(vals)/2
    intMid = int(mid)
    if (mid - intMid) == 0:
        return (vals[intMid] + vals[intMid - 1])/2
    else:
        return vals[intMid]


