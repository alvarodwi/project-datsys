"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "novels",
      [
        {
          title: "Goblin Slayer",
          jpTitle: "ゴブリンスレイヤー",
          plot: "A young priestess has formed her first adventuring party, but almost immediately they find themselves in distress. It's the Goblin Slayer who comes to their rescue--a man who's dedicated his life to the extermination of all goblins, by any means necessary. And when rumors of his feats begin to circulate, there's no telling who might come calling next...",
          genre: "Action, Adventure, Drama, Fantasy",
          link: "http://ga.sbcr.jp/sp/goblin_slayer/",
          authorId: 1,
          illustratorId: 1,
          labelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Apothecary Diaries",
          jpTitle: "薬屋のひとりごと",
          plot: "In the East is a land ruled by an emperor, whose consorts and serving women live in a sprawling complex known as the hougong, the rear palace. Maomao, an unassuming girl raised in an unassuming town by her apothecary father, never imagined the rear palace would have anything to do with her—until she was kidnapped and sold into service there. Though she looks ordinary, Maomao has a quick wit, a sharp mind, and an extensive knowledge of medicine. That’s her secret, until she encounters a resident of the palace at least as perceptive as she is: the head eunuch, Jinshi. He sees through Maomao’s façade and makes her a lady-in-waiting to none other than the Emperor’s favorite consort… so she can taste the lady’s food for poison! At her lady’s side, Maomao starts to learn about everything that goes on in the rear palace—not all of it seemly. Can she ever lead a quiet life, or will her powers of deduction and insatiable curiosity bring her ever more adventures, and ever more dangers? ",
          genre: "Drama, Historical, Mystery, Romance, Slice of Life",
          link: "http://herobunko.com/category/books/hero14/",
          authorId: 2,
          illustratorId: 2,
          labelId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "86 -eightysix-",
          jpTitle: "86―エイティシックス―",
          plot: 'A War Without Casualties\n\nThe Republic of San Magnolia has long been under attack from the neighboring Giadian Empire\'s army of unmanned drones known as the Legion. After years of painstaking research, the Republic finally developed autonomous drones of their own, turning the one-sided struggle into a war without casualties-or at least, that\'s what the government claims.\nIn truth, there is no such thing as a bloodless war. Beyond the fortified walls protecting the eighty-five Republic territories lies the "nonexistent" Eighty-Sixth Sector. The young men and women of this forsaken land are branded the Eighty-Six and, stripped of their humanity, pilot the "unmanned" weapons into battle...',
          genre: "Action, Drama, Mecha, Science Fiction",
          link: "http://dengekitaisho.jp/special/23/eighty-six/",
          authorId: 3,
          illustratorId: 3,
          labelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kuraki Kyuuden no Shisha no Ou ",
          jpTitle: "昏き宮殿の死者の王",
          plot: "When a sickly boy succumbs to illness only to awaken as a lowly undead named End, his initial reaction is not horror but joy. No longer weak and bedridden, he is eager to experience the freedom of a properly functioning body. Sadly, his delight is cut short when he realizes the shackles of his previous life have simply been replaced by new ones—specifically, the powerful necromancer who revived him. To gain true freedom, he’ll need to overcome the many obstacles in his way...starting with his dark master! ",
          genre: "Action, Fantasy, Horror, Romance, Suspense",
          link: "",
          authorId: 4,
          illustratorId: 4,
          labelId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Kaifuku Jutsushi Yarinaoshi ~Sokushi mahou to Skill Copy no Chouetsu Heal~",
          jpTitle: "回復術士のやり直し ~即死魔法とスキルコピーの超越ヒール~",
          plot: "Using healing magic on the world itself, I’ll start over.\n\n‘Healing magicians cannot fight alone.’ Keare, who was bound by this common knowledge, was exploited again and again by others.\n\nBut one day, he noticed what lay beyond healing magic, and was convinced that a healing magician was the strongest class. However, by the time he realized that potential, he was deprived of everything. Thus, he used healing magic on the world itself to go back four years, deciding to redo everything.\n\nThis is a heroic tale of one healing magician who became the strongest by using knowledge from his past life and healing magic. ",
          genre: "Action, Adventure, Drama, Fantasy, Harem",
          link: "",
          authorId: 5,
          illustratorId: 5,
          labelId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("novels", null, { truncate: true });
  },
};
