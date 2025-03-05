import matplotlib.pyplot as plt
import numpy as np

PATH = "./public/images/"

plt.style.use('_mpl-gallery-nogrid')

# make data: correlated + noise
np.random.seed(1)
x = np.random.randn(5000)
y = 1.2 * x + np.random.randn(5000) / 3

# plot:
fig, ax = plt.subplots()

ax.hist2d(x, y, bins=(np.arange(-3, 3, 0.1), np.arange(-3, 3, 0.1)))
ax.set(xlim=(-2, 2), ylim=(-3, 3))
plt.grid("off")
plt.savefig(PATH + "test_fig.svg", transparent=False)
plt.savefig(PATH + "test_fig.jpg", transparent=True)

plt.show()
