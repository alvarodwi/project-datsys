-- insert books data
insert into authors values
(1, "Asato Asato", "安里アサト");
insert into illustrators values
(1, "Shirabi", "しらび");
insert into labels values
(1,"Dengeki Bunko","電撃文庫","http://dengekibunko.dengeki.com/");
insert into series values
(1,"86 -eightysix-","86―エイティシックス―","", "http://dengekitaisho.jp/special/23/eighty-six/","Action, Drama, Mecha, Science Fiction",1,1,1);
insert into books values 
(0,1,344,"2017-02-10","http://lndb.info/images/lightnovel/2789/8929.jpeg","https://www.amazon.co.jp/dp/4048926667",1),
(0,2,280,"2017-07-07","http://lndb.info/images/lightnovel/2789/9269.jpeg","https://www.amazon.co.jp/dp/4048932322",1),
(0,3,360,"2017-12-09","http://lndb.info/images/lightnovel/2789/10440.jpeg","https://www.amazon.co.jp/dp/4048933973",1),
(0,4,344,"2018-05-10","http://lndb.info/images/lightnovel/2789/10385.jpeg","https://www.amazon.co.jp/dp/4048938304",1),
(0,5,392,"2018-10-10","http://lndb.info/images/lightnovel/2789/10887.jpeg","https://www.amazon.co.jp/dp/4049120929",1),
(0,6,392,"2019-04-10","http://lndb.info/images/lightnovel/2789/14736.jpeg","https://www.amazon.co.jp/dp/4049124610",1),
(0,7,312,"2019-09-10","http://lndb.info/images/lightnovel/2789/12757.jpeg","https://www.amazon.co.jp/dp/4049127989",1);


insert into authors values
(2, "Natsu Hyuuga", "日向夏");
insert into illustrators values
(2, "Touko Shino", "しのとうこ");
insert into labels values
(2,"Hero Bunko","ヒーロー文庫","http://bukure.shufunotomo.co.jp/hero/");
insert into series values
(2,"The Apothecary Diaries","薬屋のひとりごと","", "http://herobunko.com/category/books/hero14/","Drama, Historical, Mystery, Romance, Slice of Life",2,2,2);
insert into books values 
(0,1,328,"2014-08-29","http://lndb.info/images/lightnovel/838/5283.jpeg","http://www.amazon.co.jp/dp/4072981982",2);

insert into authors values
(3, "Kumo Kagyu", "蝸牛くも");
insert into illustrators values
(3, "Noboru Kannatuki", "神奈月昇");
insert into labels values
(3,"GA Bunko","ヒーロー文庫","http://ga.sbcr.jp/");
insert into series values 
(3, "Goblin Slayer", "ゴブリンスレイヤー", "", "http://ga.sbcr.jp/sp/goblin_slayer/", "Action, Adventure, Drama, Fantasy",3,3,3);
insert into books values 
(0,1,352,"2016-02-15","http://lndb.info/images/lightnovel/2379/7584.jpeg","http://www.amazon.co.jp/dp/4797386150/",3),
(0,2,360,"2016-05-14","http://lndb.info/images/lightnovel/2379/8102.jpeg","http://www.amazon.co.jp/dp/4797387521/",3),
(0,3,296,"2016-09-14","http://lndb.info/images/lightnovel/2379/8779.jpeg","http://www.amazon.co.jp/dp/479738834X/",3),
(0,4,296,"2017-01-13","http://lndb.info/images/lightnovel/2379/9115.jpeg","http://www.amazon.co.jp/dp/4797389559/",3),
(0,5,320,"2017-05-13","http://lndb.info/images/lightnovel/2379/9210.jpeg","http://www.amazon.co.jp/dp/4797391588/",3),
(0,6,376,"2017-09-14","http://lndb.info/images/lightnovel/2379/9378.jpeg","http://www.amazon.co.jp/dp/4797391596/",3),
(0,7,360,"2018-03-14","http://lndb.info/images/lightnovel/2379/10382.jpeg","http://www.amazon.co.jp/dp/4797391618/",3),
(0,8,352,"2018-10-15","http://lndb.info/images/lightnovel/2379/10706.jpeg","http://www.amazon.co.jp/dp/4797398094/",3);

select s.title, s.jp_name, s.plot, a.name, i.name, l.name, count(*) as "vol_count"
from series s
inner join authors a on a.id = s.author_id
inner join illustrators i on i.id = s.illustrator_id
inner join labels l on l.id = s.label_id
inner join books b on s.id = b.series_id
group by series_id;

select s.title, b.vol_number, b.release_date from books b
inner join series s on s.id = b.series_id;