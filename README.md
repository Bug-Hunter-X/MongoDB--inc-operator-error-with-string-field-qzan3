# MongoDB $inc operator error with string field
This example demonstrates an error that occurs when using the `$inc` operator in MongoDB to increment a field that is of string type. The `$inc` operator is designed to increment numeric fields.

**Bug:**
The code attempts to increment the `age` field, which is a string, resulting in an error. 

**Solution:**
The `age` field must be of numeric type (int or double) to use the `$inc` operator. The solution involves ensuring that the `age` field is of the correct type before performing the increment operation.