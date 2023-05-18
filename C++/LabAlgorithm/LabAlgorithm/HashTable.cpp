//
//  HashTable.cpp
//  LabAlgorithm
//
//  Created by Erick on 5/17/23.
//

#include "HashTable.hpp"

HashTable::HashTable(long _a, long _c, long _m) {
    
    a = _a;
    c = _c;
    m = _m;
    
    // fill vector with -1
    
    for (int i = 0 ; i < _m ; ++i)
    {
        table.push_back(-1);
    }
    
    // insert values
    
    for (int i = 0 ; i < 20 ; ++i)
    {
        insert(2*i*i+5*i-5);
    }
    
    std::cout <<  std::endl;
    
    std::cout << table[13] <<  std::endl;
    
}

HashTable::~HashTable() {
}

void HashTable::insert(int key) {
    
    if(loadFactor() == 1)
        extend();

    long i = (a * key + c) % m;
    
    for ( int j = 0 ; j < table.size() ; j++)
    {
        if( table[(i+j) % table.size()]==-1)
        {
            table[(i+j) % table.size()]=key;
            break;
        }
        else
        {
            std::cout<< "collision: " << (i+j) % table.size() <<std::endl;
        }
    }
}

void HashTable::extend() {
    
    std::cout << "Extend the table" << std::endl;
    
    long tableSize = table.size();
    std::vector<int> temp;
    
    for (int i = 0 ; i < tableSize ; ++i)
    {
        
        temp.push_back(table[i]);
        table[i] = -1;
    }
    
    for (int i = 0 ; i < tableSize ; ++i)
    {
        table.push_back(-1);
    }
    
    for (int i = 0 ; i < temp.size() ; ++i)
    {
        insert(temp[i]);
    }
    
}

bool HashTable::find(int key) {
  return false;
}

void HashTable::remove(int key){
}

double HashTable::loadFactor() {
    int counter = 0;
    
    for (int i = 0 ; i < table.size() ; ++i)
    {
        if (table[i] != -1)
            counter ++;
    }
    
    
  return double(counter) / double(table.size());
}
