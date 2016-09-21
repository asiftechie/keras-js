// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function () {
  var DATA = {
    'recurrent.LSTM.0': {
      input: {
        data: [0.665517, 0.700148, 0.455626, 0.804744, -0.880561, -0.520282, 0.574518, -0.675696, -0.97577, -0.240988, 0.80853, 0.237721, -0.97565, 0.164267, -0.003728, 0.882893, 0.121681, -0.925775],
        shape: [3, 6]
      },
      weights: [
        {
          data: [0.021587, 0.171208, 0.42254, -0.348744, 0.040626, 0.479164, 0.684427, -0.694989, 0.064855, 0.056754, -0.076463, 0.184194, -0.793392, 0.627222, -0.855503, -0.362412, 0.855828, 0.681804, -0.326362, -0.218483, 0.302837, 0.321287, -0.052374, 0.066035],
          shape: [6, 4]
        },
        {
          data: [-0.486398, -0.924962, 0.924244, -0.099505, 0.697209, -0.988196, 0.312034, -0.82215, -0.450764, -0.702362, 0.86183, -0.505312, 0.224025, -0.210654, -0.378863, 0.270893],
          shape: [4, 4]
        },
        {
          data: [-0.752966, 0.132946, 0.249025, -0.746897],
          shape: [4]
        },
        {
          data: [-0.321918, 0.410663, -0.775844, -0.651728, 0.078787, 0.493956, -0.207594, -0.280414, -0.172642, -0.673013, -0.577208, -0.485994, 0.501094, 0.138545, 0.010672, 0.470218, -0.560627, 0.188022, 0.383913, 0.692257, -0.360569, -0.077626, -0.009927, 0.454896],
          shape: [6, 4]
        },
        {
          data: [-0.008879, -0.535629, 0.500476, -0.443752, -0.370062, 0.766849, 0.348937, 0.530872, 0.151555, -0.41474, -0.538834, -0.242793, -0.809167, 0.950484, 0.326277, -0.861456],
          shape: [4, 4]
        },
        {
          data: [-0.852859, 0.946774, 0.323797, -0.109777],
          shape: [4]
        },
        {
          data: [-0.793815, -0.518475, -0.579862, 0.302531, 0.680386, 0.692198, -0.682758, -0.752123, 0.743339, 0.221127, 0.042567, 0.215791, -0.256099, 0.022924, 0.157546, 0.535038, -0.591736, 0.443027, -0.51415, 0.467614, -0.391062, 0.993584, 0.965207, 0.509182],
          shape: [6, 4]
        },
        {
          data: [0.476861, -0.902137, 0.156377, 0.778033, 0.679346, 0.284676, 0.042898, 0.289311, -0.861268, -0.784418, 0.932704, -0.825608, -0.765997, -0.944845, -0.980398, -0.006388],
          shape: [4, 4]
        },
        {
          data: [0.824388, -0.068399, 0.018677, -0.595055],
          shape: [4]
        },
        {
          data: [0.180806, -0.699554, -0.809467, -0.616054, -0.217633, 0.690901, 0.098324, 0.76948, -0.122458, 0.011661, 0.377493, -0.022008, -0.898668, -0.569468, -0.162894, 0.853575, 0.607888, -0.742334, 0.593786, -0.223577, -0.626006, 0.871527, 0.493996, -0.143212],
          shape: [6, 4]
        },
        {
          data: [0.672312, -0.799748, 0.482037, -0.833993, 0.825852, -0.939344, -0.227248, -0.287931, 0.996954, 0.391395, 0.122945, -0.582373, 0.170427, 0.895754, -0.548469, 0.313066],
          shape: [4, 4]
        },
        {
          data: [-0.590664, 0.408132, 0.246375, -0.796643],
          shape: [4]
        }
      ],
      expected: {
        data: [-0.12453, 0.324853, 0.173839, 0.145323],
        shape: [4]
      }
    },
    'recurrent.LSTM.1': {
      input: {
        data: [0.218071, -0.494078, 0.765253, 0.73909, -0.631062, 0.886984, -0.606791, -0.153821, -0.772063, 0.758903, -0.855796, -0.307768, 0.947849, 0.654099, 0.100526, -0.662352, -0.969299, 0.120011, -0.356979, 0.062594, 0.727154, -0.336611, -0.870729, -0.949392, -0.881842, 0.731806, 0.361095, -0.168111, 0.835201, 0.10262, -0.76506, -0.680559, 0.56447, 0.52546, 0.503997, -0.947011, -0.578522, 0.289283, 0.649655, 0.453943],
        shape: [8, 5]
      },
      weights: [
        {
          data: [0.904105, -0.877164, 0.33871, 0.812244, -0.802633, 0.595832, -0.981528, 0.378119, 0.41493, -0.11458, -0.692809, 0.875448, 0.318268, -0.627292, 0.941065, 0.916899, -0.78002, 0.54744, -0.282447, -0.214613, -0.087847, -0.404508, -0.411046, -0.425703, -0.603508],
          shape: [5, 5]
        },
        {
          data: [-0.708522, -0.706998, 0.233695, 0.906727, -0.986561, 0.797093, -0.065787, 0.680991, 0.839202, 0.009629, -0.39912, -0.935261, 0.187645, 0.505894, -0.292493, 0.909563, -0.869531, -0.741938, -0.617129, -0.750299, 0.78066, -0.489417, 0.306455, -0.684443, -0.097986],
          shape: [5, 5]
        },
        {
          data: [0.351652, 0.052999, 0.049473, -0.569237, 0.204228],
          shape: [5]
        },
        {
          data: [0.067039, 0.428238, -0.349015, -0.542575, 0.975082, 0.727611, 0.470814, -0.569386, 0.338722, 0.972686, 0.114987, 0.967292, 0.424026, 0.922109, -0.380777, -0.89206, -0.144607, -0.091346, -0.419741, -0.779593, -0.104814, -0.079318, 0.377633, 0.490806, -0.452043],
          shape: [5, 5]
        },
        {
          data: [-0.174106, -0.833394, 0.381703, -0.843934, -0.236694, -0.36737, -0.367741, 0.837889, -0.039786, 0.361505, 0.286408, 0.273419, -0.69914, -0.82985, -0.459621, -0.559184, -0.869297, 0.514745, 0.614001, 0.001062, 0.051854, -0.369003, 0.30649, 0.899397, 0.365186],
          shape: [5, 5]
        },
        {
          data: [-0.585018, 0.56124, 0.203839, -0.185823, -0.172334],
          shape: [5]
        },
        {
          data: [0.928699, -0.755814, -0.167684, -0.11633, 0.984822, 0.163734, 0.294156, 0.159899, 0.429806, 0.120375, 0.536481, 0.315275, 0.334484, 0.385015, 0.303987, -0.500827, -0.317092, -0.562572, 0.939739, 0.402176, -0.220776, 0.177354, -0.29364, -0.109566, 0.317174],
          shape: [5, 5]
        },
        {
          data: [-0.293165, 0.91974, -0.295233, -0.963946, 0.96014, -0.400338, 0.690912, -0.817071, -0.544351, 0.133677, 0.44247, -0.787779, 0.705348, -0.41608, -0.298659, 0.277014, -0.727674, -0.965871, 0.773519, 0.03901, -0.824034, -0.962203, 0.307807, 0.422613, -0.849913],
          shape: [5, 5]
        },
        {
          data: [-0.517725, 0.941461, 0.58815, -0.186298, -0.946213],
          shape: [5]
        },
        {
          data: [0.35193, -0.016184, -0.950798, 0.227653, -0.950189, -0.244107, 0.114508, -0.716402, -0.688769, 0.253202, 0.438141, -0.883068, -0.305492, 0.466456, -0.971678, -0.687383, 0.970269, 0.5688, -0.05607, 0.245652, -0.849934, 0.141141, -0.50186, 0.8381, 0.615684],
          shape: [5, 5]
        },
        {
          data: [0.737993, -0.987905, 0.734592, 0.869378, -0.219359, 0.16681, 0.618012, 0.167843, -0.129422, -0.743455, 0.398148, 0.849206, -0.941554, 0.796703, 0.939108, 0.23178, -0.652339, 0.019098, -0.925936, -0.892392, 0.785007, 0.794477, -0.682383, 0.542452, 0.94182],
          shape: [5, 5]
        },
        {
          data: [-0.80119, -0.093136, -0.781478, 0.664981, 0.81755],
          shape: [5]
        }
      ],
      expected: {
        data: [0.143347, 0.400829, 0.363268, 0.449314, 0.438799],
        shape: [5]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
