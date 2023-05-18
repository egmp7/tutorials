//
//  HashTable.hpp
//  LabAlgorithm
//
//  Created by Erick on 5/17/23.
//

#ifndef HashTable_hpp
#define HashTable_hpp

#include <stdio.h>
#include <iostream>
#include <vector>

class HashTable {
public: // for testing purposes
    int *buckets = 0;
public:
    HashTable(long, long, long);
    ~HashTable();
    void insert(int);
    void extend();
    bool find(int);
    void remove(int);
    double loadFactor();
    
private:
    long a;
    long c;
    long m;
    std::vector<int> table;
};


#endif /* HashTable_hpp */
