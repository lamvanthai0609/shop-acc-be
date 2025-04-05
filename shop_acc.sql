-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 05, 2025 lúc 06:20 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop_acc`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_general_information`
--

CREATE TABLE `account_general_information` (
  `id` int(11) NOT NULL,
  `images` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(5,2) DEFAULT 0.00,
  `type` varchar(255) NOT NULL,
  `status` enum('Còn hàng','Đã bán') NOT NULL DEFAULT 'Còn hàng',
  `categoryId` int(11) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account_general_information`
--

INSERT INTO `account_general_information` (`id`, `images`, `price`, `discount`, `type`, `status`, `categoryId`, `created`, `updated`) VALUES
(2, 'https://daichientamquoc.mobi//assets/storage/images/465555332_586334700585965_4539103198723618725_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465579589_586337373919031_7641577682166651534_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465153532_586337343919034_248181686828003140_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465454415_586337317252370_2087346858524477496_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464865755_586337277252374_4730498086447509400_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465223396_586337250585710_6148596264625819315_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465561386_586337230585712_7546854558314434329_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465049036_586337187252383_8042146044690701618_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464579964_586337147252387_4904443592261237228_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465282934_586337133919055_750323412360520128_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464688739_586337100585725_1083313816359047241_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465045589_586337073919061_6181166476977242100_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465010924_586337027252399_4364782340764325892_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464917253_586336980585737_4683627799301242899_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465271920_586336917252410_1559657260404713683_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465223454_586336877252414_1198394896845714506_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465222446_586336820585753_9101346958881389625_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465678128_586336697252432_2070925738456400552_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465415942_586336503919118_4567074171163876719_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464690281_586336427252459_7674407596132002987_n.jpg;', 200000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Đã bán', 3, '2025-03-15 08:10:16', '2025-03-15 14:11:18'),
(3, 'https://daichientamquoc.mobi//assets/storage/images/465554276_586853853867383_5982191623868032137_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465183653_586856573867111_8593050594909021575_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465554099_586856557200446_7317455810111329321_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464689167_586856550533780_2950150618811820728_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465022337_586856533867115_5699494587566091651_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464752131_586856487200453_4938252712320769484_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465022337_586856447200457_6586214214957708537_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465216675_586856407200461_3385721221187955138_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464688390_586856300533805_6382303879053217443_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465368817_586856007200501_4465435954594530795_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465283978_586855837200518_7030567063127734052_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465223337_586855773867191_9100650533847455531_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465676329_586855493867219_2695780248065598453_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464580115_586854957200606_3636858694152474375_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465224854_586854790533956_8584888597979627189_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465465431_586854663867302_3238386278340316659_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464670443_586854497200652_4560798503449139035_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465675247_586854433867325_8114216164957223241_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464580359_586854337200668_2626514468104184618_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465453536_586854277200674_5291091071463876448_n.jpg;', 150000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Đã bán', 3, '2025-03-15 08:10:16', '2025-03-15 14:13:52'),
(4, 'https://daichientamquoc.mobi//assets/storage/images/465656806_589759007044768_4666099603618353853_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465721326_589759050378097_4466114679659738074_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465640828_589759013711434_6906562788905997085_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465465420_589759170378085_6852404200091401916_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465698412_589759040378098_7766965987166529470_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465604997_589759153711420_6818744736189864597_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465453013_589759113711424_8884051387188080496_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465568042_589759073711428_6307074714855638097_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465655824_589759087044760_8091099650781053329_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465563460_589759137044755_5647594889221298287_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465501338_589759107044758_3350652165136935842_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465656806_589759007044768_4666099603618353853_n.jpg;', 120000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(5, 'https://daichientamquoc.mobi//assets/storage/images/465060314_1098374141939275_2556004001830152607_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465054122_1098374271939262_8782768375388729845_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464626244_1098374218605934_1901521485200506412_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464705755_1098374285272594_7314710475796979376_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464705004_1098374321939257_8030205671294327083_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465020740_1098374451939244_8096014175318280303_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464788845_1098374465272576_8853388006581358497_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464625406_1098374358605920_3760699563207286627_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464789937_1098374315272591_1527079321101433303_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465271325_1098374228605933_1449739034965241968_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465110460_1098374368605919_5094594964949556123_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465062054_1098374168605939_3593280325176345386_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465060314_1098374141939275_2556004001830152607_n.jpg;', 250000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(6, 'https://daichientamquoc.mobi//assets/storage/images/465815224_2888124594697179_7091309306395147734_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465787459_2888124881363817_7710109048429571644_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465787837_2888124768030495_56943077835710484_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465812634_2888124864697152_5620157786131601215_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465781922_2888124758030496_4311449982831198077_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465451829_2888124911363814_5698300386513721165_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465755874_2888124601363845_2580828917641452327_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465403009_2888124858030486_7892810419769125522_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465786903_2888124928030479_4687626304537917934_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465587520_2888124808030491_4655856814437278377_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465663740_2888124894697149_5251939748991027874_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465783961_2888124821363823_2913164281375710206_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465452914_2888124844697154_7403599237500657036_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465649862_2888124688030503_8533440410360499308_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465781997_2888124801363825_3330250191873022212_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465760430_2888124791363826_509172733158606647_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465760498_2888124708030501_8779588718727287878_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465815224_2888124594697179_7091309306395147734_n.jpg;', 180000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(7, 'https://daichientamquoc.mobi//assets/storage/images/465273216_477458155344131_5708176084468405046_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465005303_477459372010676_4722348862824767330_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464688995_477459345344012_6897414022172289869_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465098775_477459312010682_1597884068084964937_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465005183_477459282010685_4874176734521384840_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465555539_477459268677353_5335878281795474983_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465288677_477459245344022_7265759354961830609_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465469698_477459222010691_2757765025732088543_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465560692_477459185344028_3596530721737107120_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465110475_477459148677365_3022543402821499105_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465108434_477459112010702_8072910939903428183_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465271311_477459075344039_5347833783833687353_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465223458_477459022010711_7412336498639436117_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464789596_477458998677380_3730711520917540167_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465004781_477458975344049_4772468463179974629_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464688994_477458938677386_1234099873967873085_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465004107_477458898677390_1394136315157033534_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465182866_477458882010725_869598573002866810_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465671828_477458845344062_2312859133091001175_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464505794_477458815344065_2517787266688221942_n.jpg;', 220000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(8, 'https://daichientamquoc.mobi//assets/storage/images/465577065_122168052380099495_6029629301645874561_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465577065_122168052380099495_6029629301645874561_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465368582_122168052494099495_7742283686085462898_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465445111_122168053202099495_4015785324553918948_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465659600_122168052392099495_2486548180556226319_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465442495_122168052470099495_2043252452624661837_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465470174_122168052482099495_8394418841944236530_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465787201_122168052446099495_2818989357813094358_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465445845_122168052416099495_7988027208721656966_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465423300_122168053310099495_4389471330126241409_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465359833_122168053250099495_7493235574309143915_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465568856_122168052332099495_8079786443785528369_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465549646_122168053292099495_1497904554471884727_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465384808_122168053268099495_7521811979926368507_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465401891_122168053280099495_7924464999823838162_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465651411_122168052314099495_6439555682566256385_n.jpg;', 160000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(9, 'https://daichientamquoc.mobi//assets/storage/images/465541266_3862290920711900_6483812716434761461_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465413700_3862295904044735_7257847463145445675_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465144232_3862295140711478_7256655111829471784_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465245749_3862295404044785_1728110195261172887_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465551141_3862295744044751_2541299094234222622_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465413507_3862294984044827_4614657361842902987_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465144130_3862295837378075_4647275886563923118_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465549385_3862294754044850_3674265843783613428_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465730517_3862294647378194_4046280905820121456_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464914264_3862294600711532_461657726734817012_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465410812_3862294490711543_9108476003785446248_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465410544_3862294350711557_3393763107315121626_n.jpg;https://daichientamquoc.mobi//assets/storage/images/464913657_3862294224044903_2059740625000666604_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465120422_3862294097378249_932288575341696751_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465544991_3862293960711596_3321024669799287004_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465248372_3862293787378280_6661760789422356419_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465149923_3862293664044959_7857247083049398044_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465548883_3862293530711639_8691858398607606984_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465410805_3862293370711655_3878764977351071708_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465536026_3862293120711680_5769122831016559759_n.jpg;', 130000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(10, 'https://daichientamquoc.mobi//assets/storage/images/465777224_544832431857504_6647063654184983410_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465679179_544835898523824_4181763728237152333_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465405780_544835821857165_5132843172340509088_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465644549_544835675190513_3298370979800607742_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465371258_544835618523852_8033687909163207642_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465399992_544834481857299_2401500671612565757_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465285680_544834358523978_4444964974104598948_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465776657_544834191857328_6452282918166327243_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465474815_544833785190702_3361662130621250391_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465401974_544833715190709_8429444684086275155_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465215241_544833618524052_8858039195984147196_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465178030_544833515190729_6250470047220119969_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465284460_544833471857400_1070347963431349954_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465532698_544833358524078_1494205497572758283_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465380462_544833275190753_7440374801842256805_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465448805_544833211857426_2553209190833220815_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465112362_544833071857440_3669801197516334480_n.jpg;https://daichientamquoc.mobi//assets/storage/images/465777224_544832431857504_6647063654184983410_n.jpg;', 270000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 3, '2025-03-15 08:10:16', '2025-03-15 08:59:34'),
(15, 'https://daichientamquoc.mobi//assets/storage/images/465555332_586334700585965_4539103198723618725_n.jpg', 6000.00, 0.00, '\"Đăng Nhập\":\"Thông Tin Đầy Đủ\",\"Máy Chủ\":\"Thông Tin Đầy Đủ\", \"Dạng Nick\":\"...\", \"Cấp NV\":\"...\"', 'Còn hàng', 4, '2025-03-20 15:21:57', '2025-03-20 16:20:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_specific_information`
--

CREATE TABLE `account_specific_information` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `accountId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account_specific_information`
--

INSERT INTO `account_specific_information` (`id`, `username`, `password`, `accountId`) VALUES
(2, 'test123123', 'test123123', 2),
(3, 'test12878', 'test12878', 3),
(4, 'trsdfds', 'sdfdsf', 4),
(5, 'vbcvbcvb', 'cvbcvbcs', 5),
(6, 'sdajgfjgh', 'dasdaasdas', 6),
(7, 'ouioiuoui', 'uiouiouiou', 7),
(8, 'TEssttrr', 'dfsfsefsdf', 8),
(11, 'lamvanthai0609', 'test', 15);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `sold` double NOT NULL,
  `totalAccount` double NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `image`, `sold`, `totalAccount`, `created`, `updated`) VALUES
(3, 'Tài Khoản Tam Quốc', 'tai-khoan-tam-quoc', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742052289/anh1_qotsjk.jpg', 2865, 181, '2025-03-15 07:54:01', '2025-03-15 15:29:15'),
(4, 'Acc Kim Nguyên Bảo', 'acc-kim-nguyen-bao', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742052295/anh2_btlkfj.jpg', 70771, 5925, '2025-03-15 07:54:01', '2025-03-15 15:29:26'),
(5, 'Acc Tam Quốc Vip', 'acc-tam-quoc-vip', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742052290/anh3_gnpiqy.jpg', 48077, 207, '2025-03-15 07:54:20', '2025-03-15 15:29:36'),
(6, 'Free Fire', 'free-fire-online', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742052288/ff_qbs6m7.jpg', 8202, 0, '2025-03-15 07:54:20', '2025-03-15 15:29:37'),
(7, 'Liên Quân Mobile', 'lien-quan-mobile', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742052320/lqmb_r2nbxs.png', 3333, 0, '2025-03-15 07:54:31', '2025-03-15 15:29:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `accountId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `recharges`
--

CREATE TABLE `recharges` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `denomination` decimal(10,2) NOT NULL,
  `networkType` enum('Viettel','Vinaphone','Mobifone') DEFAULT NULL,
  `seriNumber` varchar(255) NOT NULL,
  `cardCode` varchar(255) NOT NULL,
  `oldBalance` decimal(10,2) NOT NULL,
  `newBalance` decimal(10,2) NOT NULL,
  `method` enum('ATM','CARD') NOT NULL,
  `status` enum('Thành công','Đang chờ','Thất bại') DEFAULT 'Đang chờ',
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `recharges`
--

INSERT INTO `recharges` (`id`, `userId`, `denomination`, `networkType`, `seriNumber`, `cardCode`, `oldBalance`, `newBalance`, `method`, `status`, `created`, `updated`) VALUES
(11, 1, 10000.00, 'Viettel', '13123213123', '123123213', 90000.00, 90000.00, 'CARD', 'Thành công', '2025-03-22 08:19:01', '2025-03-22 08:20:11'),
(12, 1, 10000.00, NULL, '', '', 90000.00, 100000.00, 'ATM', 'Thành công', '2025-03-22 08:41:52', '2025-03-22 08:41:52'),
(13, 1, 50000.00, 'Viettel', '1234 5678 9012', '1234 5678 9012', 100000.00, 150000.00, 'CARD', 'Thành công', '2025-03-22 09:25:57', '2025-03-22 09:27:39'),
(14, 1, 200000.00, 'Vinaphone', '312312312312312', '2342342342342342', 150000.00, 350000.00, 'CARD', 'Thành công', '2025-03-22 17:02:57', '2025-03-22 17:46:19'),
(15, 1, 20000.00, NULL, '', '', 350000.00, 370000.00, 'ATM', 'Thành công', '2025-03-22 17:47:37', '2025-03-22 17:47:37');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `slug` varchar(255) NOT NULL,
  `totalTransaction` double NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `services`
--

INSERT INTO `services` (`id`, `name`, `image`, `slug`, `totalTransaction`, `created`, `updated`) VALUES
(1, 'Bán avartar', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742053440/anh5_kygdm5.jpg', 'ban-avartar', 145, '2025-03-15 15:41:25', '2025-03-15 15:45:06'),
(2, 'Làm nhiệm vụ vương giả quy lai', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742054482/anh4-min_ccemjk.jpg', 'lam-nhiem-vu-vuong-gia-quy-lai', 350, '2025-03-15 15:41:25', '2025-03-15 16:01:38'),
(4, 'Bán thẻ chiết khấu', 'https://res.cloudinary.com/ducw36fi3/image/upload/v1742053436/anh6_fbmqds.jpg', 'ban-the-chiet-khau', 675, '2025-03-15 15:43:02', '2025-03-15 15:44:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `type` enum('Dịch Vụ','Mua Account') NOT NULL,
  `accountId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `finalBalance` decimal(10,2) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `type`, `accountId`, `serviceId`, `amount`, `finalBalance`, `created`, `updated`) VALUES
(9, 1, 'Mua Account', NULL, NULL, 100000.00, 900000.00, '2025-03-15 12:38:31', '2025-03-15 12:38:31'),
(10, 1, 'Mua Account', 2, NULL, 200000.00, 700000.00, '2025-03-15 14:11:18', '2025-03-15 14:11:18'),
(11, 1, 'Mua Account', 3, NULL, 150000.00, 550000.00, '2025-03-15 14:13:52', '2025-03-15 14:13:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `balance` decimal(10,2) DEFAULT 0.00,
  `numberPhone` varchar(20) DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `role` enum('USER','ADMIN') DEFAULT 'USER',
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `balance`, `numberPhone`, `status`, `role`, `created`, `updated`) VALUES
(1, 'lamvanthai0609', 'e950df35e8ce9e5220a1baedc88e6d1e', 'Lâm Văn Thái', 'lamvanthai0609@gmai.com', 370000.00, '0963326948', 'ACTIVE', 'ADMIN', '2025-03-15 07:37:19', '2025-03-22 17:47:37');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account_general_information`
--
ALTER TABLE `account_general_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Chỉ mục cho bảng `account_specific_information`
--
ALTER TABLE `account_specific_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountId` (`accountId`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountId` (`accountId`);

--
-- Chỉ mục cho bảng `recharges`
--
ALTER TABLE `recharges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Chỉ mục cho bảng `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `accountId` (`accountId`),
  ADD KEY `serviceId` (`serviceId`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account_general_information`
--
ALTER TABLE `account_general_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `account_specific_information`
--
ALTER TABLE `account_specific_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `recharges`
--
ALTER TABLE `recharges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `account_general_information`
--
ALTER TABLE `account_general_information`
  ADD CONSTRAINT `account_general_information_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Các ràng buộc cho bảng `account_specific_information`
--
ALTER TABLE `account_specific_information`
  ADD CONSTRAINT `account_specific_information_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `account_general_information` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `account_general_information` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `recharges`
--
ALTER TABLE `recharges`
  ADD CONSTRAINT `recharges_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`accountId`) REFERENCES `account_general_information` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
