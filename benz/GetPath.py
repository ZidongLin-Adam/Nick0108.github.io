#!usr/bin/python
# -*- coding: utf-8 -*-
import os  

import os
def getListFiles(path):
    ret = [] 
    for root, dirs, files in os.walk(path):  
        for filespath in files: 
            ret.append(os.path.join(root,filespath)) 
    return ret
if __name__ == '__main__':
    ret = getListFiles("./")
    for each in ret:
        print "'"+each+"'," 
