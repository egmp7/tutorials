#include <iostream>
#include <string>
#include <vector>
using namespace std;

/* void printValue(int value)
{
    cout << "Value: " << value << endl;
} */

void ForEach(vector<int> values,  void(*function)(int))

{
    for(int value : values)
        function(value);

}
int main()
{
    vector<int> values;

    values.push_back(1);
    values.push_back(2);
    values.push_back(3);
    values.push_back(4);
    values.push_back(5);

    //ForEach(values,printValue);

    // Lambda Function

    ForEach(values, [] (int value) {cout << "Value: " << value << endl;});

    return 0;
}

class Entity 
{
public:
    void Print() const{ std::cout << "Hello world!" << std::endl; }


};

void Pointers()
{
    Entity e;
    e.Print();

    Entity* ptr = &e;

    ptr->Print();
}

