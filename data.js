var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23932037484039093,
        "pitch": -0.01934015762853214,
        "fov": 1.5046025113304102
      },
      "linkHotspots": [
        {
          "yaw": -0.8008189377680246,
          "pitch": 0.11281257583185322,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11165981098738875,
          "pitch": -0.07258392778878431,
          "title": "Welcome!",
          "text": "To the faculty of engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.10097250337333818,
        "pitch": -0.08456375395819471,
        "fov": 1.5046025113304102
      },
      "linkHotspots": [
        {
          "yaw": 0.08031605434811695,
          "pitch": 0.034374879325003604,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": 2.9855612695369196,
          "pitch": 0.09766184209641082,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0098583925847446,
          "pitch": -0.48434656933834574,
          "title": "A sculpture",
          "text": "of something"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.02612421130613285,
        "pitch": -0.039400264457059464,
        "fov": 1.5046025113304102
      },
      "linkHotspots": [
        {
          "yaw": -3.1374708957171578,
          "pitch": 0.051844498501685266,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07241407751397233,
          "pitch": 0.26845675585770934,
          "title": "Three-floor",
          "text": "study space"
        }
      ]
    }
  ],
  "name": "NUS FOE 360 VIEW",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
