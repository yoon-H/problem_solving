-- 코드를 작성해주세요
SELECT
e.ID AS ID,
IF(c.CNT IS NULL, 0, c.CNT) AS CHILD_COUNT
FROM ECOLI_DATA AS e
LEFT JOIN 
(SELECT 
IF(PARENT_ID IS NULL, 0, PARENT_ID) AS ID, 
COUNT(ID) AS CNT
FROM ECOLI_DATA
GROUP BY PARENT_ID) AS c
ON e.ID = c.ID
ORDER BY ID ASC;