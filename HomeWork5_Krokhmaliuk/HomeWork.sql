#1

SELECT d.CustomerName, a.Price * b.Quantity as SumPrice 
FROM (((Products a left join OrderDetails b on a.ProductID = b.ProductID) left join Orders c on b.OrderID = c.OrderID) left join Customers d on c.CustomerID = d.CustomerID) 
ORDER BY SumPrice DESC
LIMIT 3;

#2

SELECT b.CustomerName, COUNT(b.CustomerID) as OrdersCount
FROM Orders a left join Customers b on a.CustomerID = b.CustomerID
GROUP BY b.CustomerID
ORDER BY OrdersCount DESC
LIMIT 3;

#3

SELECT c.OrderID, MAX(a.Price * b.Quantity) as SumPrice
FROM ((Products a left join OrderDetails b on a.ProductID = b.ProductID) left join Orders c on b.OrderID = c.OrderID)

#4

SELECT AVG(a.Price * b.Quantity) as AvaregePrice
FROM (((Products a left join OrderDetails b on a.ProductID = b.ProductID) left join Orders c on b.OrderID = c.OrderID) left join Categories d on a.CategoryID = d.CategoryID)
WHERE CategoryName = 'Meat/Poultry'
