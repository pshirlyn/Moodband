[{"id":"547bcc24.71f2e4","type":"watson-tone-analyzer-v3","z":"8fa5f010.2252c","name":"Tone Analyzer","tones":"all","sentences":"true","contentType":"false","x":512.5,"y":539,"wires":[["217837f0.b12e98","91c19f0.455026"]]},{"id":"217837f0.b12e98","type":"switch","z":"8fa5f010.2252c","name":"Calc Score","property":"response.document_tone.tone_categories[0].tones[0].score","propertyType":"msg","rules":[{"t":"gte","v":"0.7","vt":"num"},{"t":"gte","v":"0.400","vt":"str"},{"t":"else"}],"checkall":"false","outputs":3,"x":883.5,"y":456,"wires":[["82d21ef.f36f3e"],["4636086b.9a38a8"],["b93590f7.163fd"]]},{"id":"f6099606.727918","type":"exec","z":"8fa5f010.2252c","command":"/usr/bin/arecord","addpay":false,"append":"-f S16_LE -r 48000 -d 3 /home/pi/test.wav","useSpawn":"","timer":"10","name":"arecord","x":210,"y":229.5,"wires":[["2b2be4f8.79a17c","28931ee5.9de472"],["39a6e2ba.6f7f0e"],[]]},{"id":"9f0999bb.8b1178","type":"watson-speech-to-text","z":"8fa5f010.2252c","name":"Analyze Speech","continuous":true,"lang":"en-US","langhidden":"en-US","band":"BroadbandModel","bandhidden":"","password":"aJfYJ77kLHVs","x":461,"y":356,"wires":[["a85f302b.94e88"]]},{"id":"2b2be4f8.79a17c","type":"file in","z":"8fa5f010.2252c","name":"File Open test.wav","filename":"/home/pi/test.wav","format":"","x":422,"y":262,"wires":[["9f0999bb.8b1178","aa99649f.ad1498"]]},{"id":"82d21ef.f36f3e","type":"Jilia Device","z":"8fa5f010.2252c","jiliaName":"Jilia  LED Blink","jiliaDevice":"fefe5333-9148-401b-ac07-fe9ea345e8e8","jiliaDeviceType":"local-led","jiliaMonitor":"","jiliaMonitorFilter":"Any","jiliaAction":"http://localhost:1337/servers/eb234d77-c93e-4250-bc25-1728d79678f9/devices/fefe5333-9148-401b-ac07-fe9ea345e8e8","jiliaActionField0":"action=toggle","jiliaActionField1":"","jiliaActionField2":"","jiliaActionField3":"","jiliaActionField4":"","x":1113,"y":368,"wires":[[]]},{"id":"4636086b.9a38a8","type":"Jilia Device","z":"8fa5f010.2252c","jiliaName":"Jilia  LED Blink","jiliaDevice":"bbd83327-6206-40c6-9672-66a031e10c6c","jiliaDeviceType":"local-led","jiliaMonitor":"","jiliaMonitorFilter":"Any","jiliaAction":"http://localhost:1337/servers/eb234d77-c93e-4250-bc25-1728d79678f9/devices/bbd83327-6206-40c6-9672-66a031e10c6c","jiliaActionField0":"action=toggle","jiliaActionField1":"","jiliaActionField2":"","jiliaActionField3":"","jiliaActionField4":"","x":1105,"y":421,"wires":[[]]},{"id":"b93590f7.163fd","type":"Jilia Device","z":"8fa5f010.2252c","jiliaName":"Jilia  LED Blink","jiliaDevice":"6fe288a1-a183-4a17-8f88-a709b3490c58","jiliaDeviceType":"local-led","jiliaMonitor":"","jiliaMonitorFilter":"Any","jiliaAction":"http://localhost:1337/servers/eb234d77-c93e-4250-bc25-1728d79678f9/devices/6fe288a1-a183-4a17-8f88-a709b3490c58","jiliaActionField0":"action=toggle","jiliaActionField1":"","jiliaActionField2":"","jiliaActionField3":"","jiliaActionField4":"","x":1094,"y":534,"wires":[[]]},{"id":"2c828f85.971e2","type":"inject","z":"8fa5f010.2252c","name":"","topic":"","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":120,"y":128,"wires":[["f6099606.727918"]]},{"id":"28931ee5.9de472","type":"debug","z":"8fa5f010.2252c","name":"","active":false,"console":"false","complete":"false","x":663,"y":143,"wires":[]},{"id":"aa99649f.ad1498","type":"debug","z":"8fa5f010.2252c","name":"","active":false,"console":"false","complete":"false","x":623,"y":271,"wires":[]},{"id":"a85f302b.94e88","type":"function","z":"8fa5f010.2252c","name":"Text transcript","func":"msg.payload = msg.transcription;\nreturn msg;","outputs":1,"noerr":0,"x":556.5,"y":447,"wires":[["547bcc24.71f2e4"]]},{"id":"39a6e2ba.6f7f0e","type":"debug","z":"8fa5f010.2252c","name":"","active":false,"console":"false","complete":"false","x":517,"y":199,"wires":[]},{"id":"91c19f0.455026","type":"debug","z":"8fa5f010.2252c","name":"","active":true,"console":"false","complete":"response.document_tone.tone_categories[0].tones[0].score","x":952,"y":630,"wires":[]}]