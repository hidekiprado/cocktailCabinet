-- Get cocktails for which all required alcohol exist in the cabinet with sufficient volume
select name from cocktail where id not in 
    (select cocktail_id
     from cocktail_ingredients ci
     where not exists (select 1 from cabinet_contents cc
                       where cc.user_id = 1
                       and   cc.liquor_id = ci.liquor_id
                       and   cc.volume >= ci.volume)
    );

select l.name, cc.volume
from cabinet_contents cc
join liquor l on l.id = cc.liquor_id
where cc.user_id = $1    

UPDATE cabinet_contents cc
SET    volume = cc.volume - ci.volume
FROM   cocktail_ingredients ci 
WHERE  ci.liquor_id = cc.liquor_id
AND    cc.user_id = 1
AND    ci.cocktail_id = 3;

DELETE FROM cabinet_contents WHERE user_id = 1 AND volume <= 0;

select id, name 
from liquor 
where id not in (select liquor_id from cabinet_contents where user_id = 1)
order by name;