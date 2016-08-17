import json

data = [{'ABC1':'DEF1'}]
for x in range(0, 100):
	data[0]["Hello"+`x`] = "Rashmi"+`x`

for x in range(0, 100):
	print json.dumps(data)
