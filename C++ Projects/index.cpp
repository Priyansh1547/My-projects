#include <iostream>
using namespace std;


void calculator(){
  int num1, num2;
  string op; // op means operator
  cout << "Enter the first number: ";
  cin >> num1;
  cout << "Enter the second number: ";
  cin >> num2;
  cout << "Enter the operator: ";
  cin >> op;
  if (op == "+") {
    cout << num1 + num2;
  } else if (op == "-") {
    cout << num1 - num2;
  } else if (op == "*") {
    cout << num1 * num2;
  } else if (op == "/") {
    cout << num1 / num2;
  } else {
    cout << "Invalid operator";
  }
}

int main() {
  calculator();
  return 0;
}