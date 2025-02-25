const listViewData = [
    {
      "title": "Star Rating",
      "id": "star-rating",
      "link": "#"
    },
    {
        "title": "News",
        "id": "news"
      },
    {
      "title": "Blogs",
      "id": "blogs",
      "children": [
        {
          "title": "Today",
          "id": "today"
        },
        {
          "title": "Yesterday",
          "id": "yesterday"
        },
        {
          "title": "Archive",
          "id": "archive"
        }
      ]
    },
    {
      "title": "Links",
      "id": "links",
      "children": [
        {
          "title": "Oracle",
          "id": "oracle",
          "children": [
            {
              "title": "USA",
              "id": "usa",
              "children": [
                {
                  "title": "Northeast",
                  "id": "northeast"
                },
                {
                  "title": "Midwest",
                  "id": "midwest"
                },
                {
                  "title": "South",
                  "id": "south"
                },
                {
                  "title": "West",
                  "id": "west"
                }
              ]
            },
            {
              "title": "Europe",
              "id": "europe"
            },
            {
              "title": "Asia",
              "id": "asia",
              "children": [
                {
                  "title": "Japan",
                  "id": "japan"
                },
                {
                  "title": "China",
                  "id": "china"
                },
                {
                  "title": "India",
                  "id": "india"
                }
              ]
            }
          ]
        },
        {
          "title": "IBM",
          "id": "ibm"
        },
        {
          "title": "Microsoft",
          "id": "microsoft"
        }
      ]
    }
  ];

  export default listViewData;