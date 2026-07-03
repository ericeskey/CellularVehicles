[00:00:00] **Samantha:** Hi, this is Samantha from ABC. Is this Martin on the line?

[00:00:03] **Martin:** Yeah, this is Martin. Hello, Samantha.

[00:00:05] **Samantha:** Hi, Martin. How are you doing today?

[00:00:08] **Martin:** Yeah, I'm fine. It's a calm day. I just came in from a snowstorm. It's crazy weather here.

[00:00:13] **Samantha:** Oh.

[00:00:13] **Martin:** But yeah, everything is cool and calm. Easter is over. That's nice.

[00:00:17] **Samantha:** Yes.

[00:00:18] **Martin:** Yeah. So you're busy today? Yeah.

[00:00:20] **Samantha:** Yes. We are. But excited to speak with you.

[00:00:23] **Martin:** Okay. Sounds good.

[00:00:24] **Samantha:** Thanks for taking the time. I have a little bit of an introduction for you just to go through the details of the call, and then we can get started after that.

[00:00:32] **Martin:** Sounds good.

[00:00:33] **Samantha:** I work for a company called ABC, and we're a market research and consulting firm located in Boston, Massachusetts in the US. We help our clients understand their customers wants and needs. Today, we're really interested in understanding your wants and needs as they relate to all aspects of low throughput genetic sequencing. We're really interested in that, and we want the conversation to be super open-ended. The more you talk and the less I talk the better. You'll notice that I might ask why a lot, or some of the questions might seem obvious or redundant. It's really just to get the answers in your own words. Additionally, I am not a scientist. I obviously know about this topic, but you are the expert here. There may be times where I'm not exactly sure what you're talking about, and I might ask why. So just bear with me there.

[00:01:25] **Martin:** Of course. Yes, totally.

[00:01:26] **Samantha:** Great. The interview should take about 45 to 60 minutes, and we will be audio recording it just so that I don't have to take so many notes. But everything that you tell me will be kept confidential and used for research purposes only. But if for any reason you feel like you'd rather not answer a question, feel free to let me know and we can skip it.

[00:01:46] **Martin:** Sounds good. Yeah.

[00:01:47] **Samantha:** Okay?

[00:01:48] **Martin:** [crosstalk 00:02:04].

[00:01:50] **Samantha:** Any questions before we begin?

[00:01:52] **Martin:** No. No. Everything is clear, and I try to keep everything as simple as possible. But I'm not as much an expert as I might wish sometimes, so I think we will get along, technically. Yeah.

[00:02:03] **Samantha:** Perfect. Okay, great. If you could start by telling me a little bit about yourself and the lab that you work in that would be great.

[00:02:10] **Martin:** Okay. Yeah. I've just entered sequencing and next generation sequencing about three and a half to four years ago. Before that, we occasionally use sequencing data, but we heavily outsourced both the sequencing, the library prep, and the analysis. And we only have Excel data sheets, which shouldn't have anything to do with the topic, but I was really curious about getting more into that. That's why I changed my position. Right now, I'm working at a clinical research department of the hematology oncology in Charité, Berlin. It's a clinical institution. My boss, he's the head of the clinical department for hematology oncology, so he has contact to patients. And he's conducting clinical research on the side.

[00:02:51] But it's very translational, meaning that we received patients directly from his clinics. He's interested in mutations in these patients. This information floats back into the diagnosis of these patients and he's ... They're pretty up to clinical standards, at least, compared to Germany. We're still years behind American standards in terms of clinical therapeutics, so T-cell therapies. But we're doing our part, and our group is focusing on flat tumors. What we do is we seek patient material, and we try to understand what mutations develop in these patients coming from stem cells. And we look at patient material when they have a tumor and when the tumor is gone and to compare the mutations at the beginning with mutations that occur when these patients have [inaudible 00:04:27].

[00:03:36] Basically, we're using ... For one branch of how we use sequencing data is to get ideas about the mutational landscape of these patients. This is done both in low throughput data and in high throughput data, but then we also play around with some newer technologies, like single cell, RNA sequencing, and we're developing, also, new methods, which are still in establishment phase. That's why for some questions that you had on your question feed, the answers were hard to answer because things change. When you establish stuff, you do certain things repeatedly. Once you know how to work, then you stop that for sometime, and you go to another range of your method that you have to develop. We do all of these things.

[00:04:15] My personal role now is I'm the guy for everything. I learned bioinformatics, so I'm doing all the data analysis now. I'm organizing the patient acquisition. I'm doing the lab work, and I organize with my PhD students how we do the lab at the preparation of sequencing libraries. Then, I perform these libraries for a low throughput sequencer, and then I do the visualization. And I do the bachelor thesis and the PhD thesis. I check that everything is working fine, and we also publish data. I'm in between everything right now. That's why I probably have a good look at all these fun parts. It's kind of mind-blowing sometimes, and I pull out lots of hair when I have to do lots of multitasking things because it's getting more and more complicated, all these areas. Trying to keep spaces in my head free for all of these places is getting harder and harder.

[00:05:03] **Samantha:** Mm-hmm (affirmative).

[00:05:05] **Martin:** Yeah.

[00:05:06] **Samantha:** Absolutely. No, and it definitely sounds like you have a lot of the responsibilities that we're interested in. I think this will be super interesting for us. Can you tell me approximately how many runs you're conducting in a week?

[00:05:19] **Martin:** Yeah, so that's why we come to this ... What I was talking about before. Because the work is kind of shared between ... Okay. Let's say this ... Here is another time when we do one low throughput sequencing a week because we already have some data that we can work with from our high throughput data. Then, just like two or three months when we don't do any low throughput sequencing. We're not in a diagnostic rotation where everything is fluent. And also [inaudible 00:07:29] one year kind of broke every frequency and every routine that we've been developing. It really depends on what we're doing and what stage we are right now. Because one of our big projects is to get mutation data from a whole patient by high throughput sequencing.

[00:06:02] Then, we look at individual populations in these patients, like cell populations that we sort and that we ... Then, for every patient, we have 20 different populations. Those, we do deep sequencing, targeted deep sequencing, which we do on a low throughput machine. Once we have a list for a couple of patients of mutations, we are preparing for some weeks, and then, we're doing one run after the other in a low throughput manner on a MiSeq machine.

[00:06:27] **Samantha:** Okay. Yeah. That's really interesting.

[00:06:30] **Martin:** Yeah.

[00:06:30] **Samantha:** Tell me a little bit about those low throughput sequencers you're using. It sounded like you mentioned MiSeq, and you might be using Chromium based on your screener responses. Is that right?

[00:06:41] **Martin:** Yeah. Yeah. That's true. The Chromium isn't a sequencer, itself. If I understand it right, it's more like a preparation machine for that. All the data we do on a Chromium machine, in the end, goes into either a low throughput machine like MiSeq if we're establishing a method.

[00:06:54] **Samantha:** Mm-hmm (affirmative).

[00:06:56] **Martin:** Or we're collecting lots of data, and it goes into a NovaSeq machine, which we outsource to the Berlin Institute of Health. But for low throughput, if we develop methods for a single cell RNASeq , we always goes into low throughput machine in order to control the coverage of the data. One thing we do, we try to combine RNA sequencing with mutational analysis. Normally, if you have single cell RNA sequencing data, your data is very sparse, and it's very hard to analyze mutations with this sparse data.

[00:07:28] **Samantha:** Mm-hmm (affirmative).

[00:07:29] **Martin:** What we're developing for single cell sequencing is now we try to enrich certain areas of the DNA or of the RNA stretch in order to get mutation information there and in order to analyze how much coverage we have, whether we increase, actually, the coverage. Confirmation of the methodology, we go into a MiSeq machine because the coverage there is enough to get ideas about the coverage, whether we have increased coverage in certain areas. Once we have that, we then go with the same library into a high throughput machine, where we can actually analyze the data, then. It's like a quality control step for the single cell or RNASeq. That's what we use a MiSeq for.

[00:08:08] **Samantha:** Okay.

[00:08:09] **Martin:** Of course, this data, then, comes from a Chromium before.

[00:08:12] **Samantha:** Great. Okay. Can you tell me a little bit about what you like about your MiSeq and maybe anything that you don't like?

[00:08:17] **Martin:** Okay. What do I like about the MiSeq? I like about the MiSeq the panel design that you can, without having studied the menu, once you go with you denatured product to the machine, it tells you step by step what you have to do.

[00:08:30] **Samantha:** Mm-hmm (affirmative).

[00:08:32] **Martin:** I like that a lot. What I don't like so much is the response you get if you have some arrows in the machine, and there's lots of improvement in why doesn't this work. For example, at the beginning, I think, for every sequencing machine, if it's Illumina or not, and whether you have to import a sample sheet, which tells the machine how to do multiplex data. It gives the machine valid information about how to run. This could be improved in order to prevent mistakes from happening. Because sometimes, it just tells you that machine doesn't work. It's not fine. It is not fitting. It would be easier to use if it could tell you better.

[00:09:09] This sample sheet might not have the right data delimiter, case use of the delimiter [inaudible 00:12:14]. Or try to convert it with a little converter, and then, we see whether this works. We're always afraid at the beginning when we go into this machine whether our sample sheet is working. Then, we have to take the sample sheet back, go to another machine, try to understand what is the problem, and go back into this machine. Because it's very cryptic information. It tells you if something goes wrong. But if nothing goes wrong-

[00:09:41] **Samantha:** Interesting. [crosstalk 00:12:39].

[00:09:42] **Martin:** Yeah. Yeah. If nothing goes wrong, it's pretty nice.

[00:09:44] **Samantha:** Great. Yeah. So when things do go wrong, it sounds like, basically, it tells you that there's an error, but it's not telling you what the error is. Then, you have to do more analysis trying to figure out what's going wrong with it.

[00:09:59] **Martin:** Yeah, that's right. Of course, for something to work right, things only work right in one way in informatics. There's billions of ways those things can go wrong, but normally, there's common mistakes that people do. And the common mistakes, they are now into three or four different things that people usually do wrong, and they could be accounted for, which would make life much easier. I could trust my PhD people to do their work themself. Because they hit that break, and they're useless. They have to come to me, and we have to fix it. Most of the time, it's one of three things that are not working, and this could be much easier if it just tells you if that's the problem. If there's a problem, then I can keep on going with my work.

[00:10:38] **Samantha:** Mm-hmm (affirmative). Okay. What are those three main errors?

[00:10:41] **Martin:** One of the errors is that the sample sheet is done with Mac OS? decoding, and normally, there's a difference between Windows and Mac OS systems in the way that the delimiters ... I mean that end of line signs are used. Then, you just have to move it to one simple converter that removes these end of line signs. Then, it works. But as always, I have to look up [inaudible 00:14:30] again. How do I see these lines? It's the end of line SD codes. Then, I have to do a translator for that, and it always takes me like 10 minutes to remember how to do that.

[00:11:13] **Samantha:** Mm-hmm (affirmative).

[00:11:14] **Martin:** Of course, my workflow entails that, but if someone else does that samples sheet, this happens a lot. The second thing is using the wrong delimiter. I always do ... I delimit my data with a test sign because it's easier to read. If you look at this data with another editor, but the machine was comma separator. This is often what you don't think about. This is really how I tend to change on this machine. It's an easy step, but normally, you, then, have to go back and attach to comma.

[00:11:42] **Samantha:** Mm-hmm (affirmative).

[00:11:44] **Martin:** Then, the two other things that normally happen is that ... I don't know. Do you know about these sample sheets, how they look, or ...

[00:11:51] **Samantha:** Just a bit.

[00:11:52] **Martin:** Just totally. Just a bit. Yeah. The other thing is you need all these information blocks that you have in this sample sheet, some of them are totally irrelevant. They're just metadata that is conveyed to the metadata of the output, so it's totally unnecessary what you write there. But some of them are really required. You need like break data, break ... Just like a delimiter that now the data starts. Oftentimes, people just forget this that you have these lines that have to have exactly a certain way how they look, and then, they use a space in between something like that. That's really easy. Just you have to write data with these two [inaudible 00:16:29], and everything is fine. I've been correcting lots of sample sheets that look like that as well.

[00:12:38] **Samantha:** Mm-hmm (affirmative). Okay. Interesting.

[00:12:41] **Martin:** These are basically easy problems, and it would be nice. If people programmed this, this programming for this MiSeq, it seems like if they had done lots of sequencing, they would have canceled it and made life easier.

[00:12:52] **Samantha:** Mm-hmm (affirmative). Yeah, absolutely.

[00:12:55] **Martin:** It's not a big deal though.

[00:12:56] **Samantha:** Mm-hmm (affirmative). How often are those errors happening? Is that frequent or pretty infrequent?

[00:13:02] **Martin:** It happened to me the first five times I did this thing. It happens every time. I let some of my PhD people do the sample sheet. It's an easy conversion. At the beginning you decide what codes you want to use and what industries you want to use, and then, you have to convert this with some easy programming language into a sample sheet. But this conversion, one of these three things, three or four things I mentioned, they're always forgotten. Everyone does these mistakes two or three times at the beginning whenever someone new does it. Then, there's people that always do it. They never learn, and I always have to go and tell them, "What did you think about the test?" "Oh, no, I did it again." And problem solved.

[00:13:41] **Samantha:** Yes. That's a tough one.

[00:13:42] **Martin:** Yeah. But do you understand?

[00:13:44] **Samantha:** Tell me a little bit-

[00:13:45] **Martin:** Easy to do and easy to prevent.

[00:13:47] **Samantha:** Mm-hmm (affirmative). Absolutely. Tell me a little bit about the physical experience of the MiSeq, a little bit about maybe washing, loading, screen input. What are those physical experiences like?

[00:13:58] **Martin:** Yeah, they're actually pretty good. As I said, like in graphical interface, which tells you exactly what you have to do in the next step, so you have an animation, which shows you what bottle has to go into what little slip. If you really look at this thing and don't just go ahead, this is a very nice experience, also, from the technical experience, the machine has a nice look, like how people imagined futuristic like 10 years ago. I like that. That's round edges and everything. That's pretty nice. You have a touchpad. Of course, these touchpads never, if you use iPhone or modern Android phones, these always come up short in comparison, these touchpads from these devices. Because the latency is always not very pleasant, but I'm just used to that. You know what I mean probably?

[00:14:43] **Samantha:** Can you describe in a little more detail what you mean there?

[00:14:46] **Martin:** Yeah, okay. You have an iPhone. You touch something. You scroll. Everything is without any latency. Everything moved smoothly, and you have self-movement. You never have that with these machines. The touching is always, you feel like you have to press very hard to get a response from them. Touchpads, they're never up to standard with iPhone Touchpad usability.

[00:15:07] **Samantha:** Mm-hmm (affirmative). Yeah, that [inaudible 00:20:01].

[00:15:09] **Martin:** That's fine. Thanks. Yeah.

[00:15:10] **Samantha:** You also mentioned-

[00:15:12] **Martin:** Then, you have-

[00:15:13] **Samantha:** Sorry. You mentioned the round edges. What was good about that?

[00:15:16] **Martin:** It just feels nice. I like round edges. People like round edges. It's just some machines, they feel like they are cut by some metal machine, and you don't have smooth edges. It's just something you don't like to touch. You don't like to place your hands on, and this is nice about this machine. It has a nice touch.

[00:15:34] **Samantha:** Mm-hmm (affirmative). Great. Okay. Yeah, continue.

[00:15:36] **Martin:** Yeah. Then, you have to ... These cleaning processes, of course, you have certain washing steps that have to happen afterwards, and you have to provide a certain washing liquid into 20 different slots into the washing cartridge, which you have to, then, place into that MiSeq. This is a bit cumbersome, so it feels like this work would have been taken away from you by some kind of machine, which you just have to fill a bottle, and then, this bottle is placed into these different cartridges. But it also feels the machine is deserving of that ... I don't know. It's emotional the way I'm saying it, but this machine gives me good data. So I'm kind of taking care of it by providing these washing liquids into these 24 or whatever how many slots-

[00:16:17] **Samantha:** Mm-hmm (affirmative).

[00:16:19] **Martin:** ... there are. It's okay. It's not so bad, but I know other people they're really annoyed by that, and they always think why do I have to input this liquid into all these different slots. You have to repeat that several times. It feels a bit unnecessary, and it feels like this is something that can be automatized easily. Yeah.

[00:16:39] **Samantha:** About how long does that take usually?

[00:16:42] **Martin:** But it's not [crosstalk 00:22:10]. The washing?

[00:16:45] **Samantha:** Mm-hmm (affirmative).

[00:16:46] **Martin:** About half an hour. You do it, and you go out. So you can do something else. After a while, you know how long it takes. Then, you come back. The net time, you work on it. It's five minutes once you know where all your materials are. At the beginning, I always had to look for tween 20 some surfactant, which we didn't normally use for anything else. But this is just disorganization in our lab. Normally, it's done in five minutes of network time.

[00:17:12] **Samantha:** Mm-hmm (affirmative).

[00:17:14] **Martin:** So not too bad.

[00:17:15] **Samantha:** Okay. Then, tell me a little bit about the size of the machine. How do you feel about the size?

[00:17:20] **Martin:** It could be smaller. Definitely. But you never know what's actually needed inside that machine.

[00:17:25] **Samantha:** Mm-hmm (affirmative).

[00:17:27] **Martin:** But you know how big the MiSeq, I think, is?

[00:17:29] **Samantha:** Yes, I have an idea about how big it is. If it were to be smaller, how much smaller would be helpful for you? What would that do for your workflow or your space in your lab?

[00:17:39] **Martin:** Yeah, so normally, so height doesn't matter so much, and depth doesn't matter. It's mostly about the width of the machine, so half the width would be okay, would clearly help to put it in ... Now, it's outsourced with some ... We have this lab where the stuff is too big for the normal workspace. It's sitting there, and it's okay. But if it were afterwards, or maybe like 60%, we could place it into our PCR like where the work was actually happening. It would ease the flow of it a bit better. Because I don't think it needs cooling. I'm not really sure. It's in a cool room as well, which is kind of unpleasant sometimes to be there for some time and repeat the sample sheet, fixing three times in a row for degree room.

[00:18:19] **Samantha:** Mm-hmm (affirmative).

[00:18:20] **Martin:** The width is a bit funny, and it's not necessarily wide. There's these bottles that come to the side. They could be placed maybe somewhere else. Yeah.

[00:18:28] **Samantha:** Mm-hmm (affirmative). Interesting. This might be obvious, but why is the width the most important? Why would that allow you to move it to a different location?

[00:18:36] **Martin:** Yeah. Because just normally, besides the workspace that we have, like we have our two meters. I don't know how many feet of workspace, and these machines normally sit more on the back because they only have to apply the reagents and closeout from the front. The workspace is normally they are pretty deep, so there's enough space to put something up front and to put stuff behind it. But they knew when to place another centrifuge, or another desktop centrifuge, or another rack next to it, which you can. You don't want to play this ... You don't have space in front of it because you have to open lids and stuff.

[00:19:08] **Samantha:** Mm-hmm (affirmative).

[00:19:10] **Martin:** All of it would be better.

[00:19:12] **Samantha:** Okay. Great. Yeah. That makes a lot of sense. You were talking about some other equipment, like a centrifuge. What other equipment or instruments do you need by your sequencer? What do you usually have around it?

[00:19:23] **Martin:** More space takes the washing material. Right now, we don't have an expert because we also have the machine to the school room. But if everything were organized in a sensible way, we would have some water next to it because you need lots of medical water. Clean water. You need some reagents, and you need some smaller in bottles because you have to prepare a washing solution, and you have to mix that for some time. That's easy if that's close to it. So you need that.

[00:19:48] Then, what would be really sensible, you have to denature your libraries directly before they go into the machine. That means there's a certain procedure of five to six steps that you have to do with your libraries. But once these sequencing libraries are prepared, they can be stored for several weeks until you collect enough libraries. But then, right before sequencing, they have to be denatured. Also, something improving the arrow management, you have your denatured product, which has to go fresh into the machine. If it takes half an hour to fix the sample sheet problem for some person who is not an expert, he has to denature his library, again, because it's not fresh anymore. That just came back into my mind. So you need materials for denaturing, which doesn't take a lot of space. But you need some ethanol, some sodium hydroxide, some small chemicals, and you need a little centrifuge where you can spin down your product occasionally.

[00:20:40] **Samantha:** Mm-hmm (affirmative).

[00:20:42] **Martin:** But that's basically all you need. And a fridge would be nice if it's close to it.

[00:20:45] **Samantha:** Okay. Yeah. Tell me, how do you usually get your samples from the fridge to the sequencer? How far away are they? What's that process like?

[00:20:53] **Martin:** Yeah, right now, we do all the steps that I mentioned. With the denaturing, we do a PCR, or like I said, like a post-PCR room.

[00:21:00] **Samantha:** Mm-hmm (affirmative).

[00:21:02] **Martin:** So we keep a libraries in the fridge, or sometimes for as long as those, often, the freezer, which is right next to it. Then, we take it out. We get our chemicals. These are sometimes spread over the whole institute because people are using them for everyone's denaturing their stuff right at their place, and we have the denature product, which everyone used. But normally, you get your little chemicals right to the fridge. You get some ice. Then, you do your 20 to 40 minute denaturing stuff right on the fridge. Put everything on ice, and you try to hurry to the machine, which is like 20 meters away, like a couple of feet away. You start the sequencing process.

[00:21:36] **Samantha:** Mm-hmm (affirmative). Is that just like a tray that you're bringing over? Do you have a cart that you're working on? How are you bringing those samples?

[00:21:43] **Martin:** Actually, what goes into the machines before sequencing is just 600 microliters of cooled library materials. Normally, it's just [inaudible 00:29:27] on ice, which goes over there. Yeah.

[00:21:57] **Samantha:** Okay. [crosstalk 00:29:31].

[00:21:58] **Martin:** Then, I would ... Something I forgot. Of course, we have the flow cell, as well, which is very small, which fits into the hand. We have the cartridge that's a reagent cartridge, containing all of the material needed for cycling and for simplification. This has to be thawed before.

[00:22:15] **Samantha:** Mm-hmm (affirmative).

[00:22:17] **Martin:** I think the run ... But we do this separately. We thaw the reagent cartridge, replace it into the MiSeq, and then, we start with doing the rest of the denaturing.

[00:22:26] **Samantha:** Mm-hmm (affirmative). Okay. Is there anything that you think might be able to make those steps a little bit simpler?

[00:22:32] **Martin:** I don't know if that's possible, but what's really annoying as the denaturing part, which definitely has to be done. I'm not really sure what it's for, but I think it's just you have double stranded DNA. This has to be somehow be opened in order for the sequencing, or in order for these DNA molecules to fit onto the flow cell. I don't think this can happen as double stranded molecules. But this is a ... You need a couple of steps. You need some chemicals that are pretty rare, and they have to have a certain pH. Sometimes, the pH changes, and you have to prepare this chemical again, which really is annoying.

[00:23:07] By some magical way, all this denaturing could happen, and the machine could be part of the first step of the machine because it's also combined. As I said, it has to be freshly done. Once it takes too long, you have to repeat, at least, the heating. The last [inaudible 00:31:24] the heating to a 95 degrees for a minute. This could not be somehow put into the machine and outsourced to the machine from the scientist. Because you have very complex stuff that you do, and the stuff with molecular biology.

[00:23:39] In the end, you're always supposed to do this low level chemistry stuff before actually going into the machine. It's always a bit annoying. There's always some chemical missing or out of date, and it also feels like a black box where everything has the right pH and concentration, whether someone made a mistake by preparing the sodium hydroxide. It feels unnecessary that you have to do it, and that's also not what any one of us has an expertise in. We are molecular biologists, or clinics, or do molecular analysis of mutations. Then, you have to mix these chemicals, and you can easily destroy your experiment if you do something wrong there.

[00:24:15] **Samantha:** Mm-hmm (affirmative). Absolutely.

[00:24:17] **Martin:** This would be a great step.

[00:24:18] **Samantha:** Great. Okay. Then, in thinking about everything that happens before sequencing, can you tell me a little bit more about what those steps are, what the library prep is like? Tell me a little bit about that.

[00:24:31] **Martin:** Maybe specify that. For the MiSeq or everything that's in general-

[00:24:34] **Samantha:** For the MiSeq.

[00:24:36] **Martin:** ... for all sequencing? For the MiSeq.

[00:24:38] **Samantha:** For the MiSeq-

[00:24:39] **Martin:** Okay.

[00:24:40] **Samantha:** ... would be great. Yeah. We're just interested in that low throughput sequencer.

[00:24:44] **Martin:** Okay. If we are talking about ... There's two things. One thing is we are using it as a quality control for high throughput sequencing on the NovaSeq, which happens sometimes.

[00:24:54] **Samantha:** Mm-hmm (affirmative).

[00:24:55] **Martin:** We normally have the library prepared. More normally, it's Excel sequencing. Or it's some 10x workflow that we've done, and we have the libraries ready. Then, nothing is different on the MiSeq machine. We just use this library. We take a little bit of it. We try to ... Normally, on a NovaSeq, you need a certain pico-Molar amount of material, and we adjust it for use on a MiSeq.

[00:25:18] **Samantha:** Mm-hmm (affirmative).

[00:25:20] **Martin:** We don't [inaudible 00:34:16]. Then, we do the denaturing and go into the MiSeq machine. Then, we look at the data, and we see, "Okay, this is nice. We can go to the NovaSeq." Or, "We have to adjust certain things before we spend 10 to 20,000 euros on a NovaSeq run." Then, the other thing we do, we do target deep sequencing, which is coming more and more frequent now, using these little populations, little DNA populations of sample that I was talking before.

[00:25:51] There, we have a special library preparation, which is used for low throughput sequencing. It's from New England. What's it called? NEB. I'm not sure. New England Biotechnology, or something. We have a certain library preparation method. We have a list of mutations for our patients. We design primers for these mutations for every single mutation. We do simple PCRs for every mutation and every population that we're looking at. This is going to be between 50 and 500 PCRs that we do.

[00:26:20] We then, extract the DNA from all these PCRs. We pull them together. We think about before how we do our indexing. So which mutations can come together into one index pool, which has some kind of overlap, so they have to be put into different [inaudible 00:35:55]. Then, we do this library preparation protocol from New England Biology, or from NEB, which takes about two days. Then, we do quality check in the end with ... In our case, it's [inaudible 00:36:13] machine, which looks at fraction size, whether the fraction size is okay. This is a normally very easy way to see if you've done something horribly wrong and the size doesn't fit. If that's not the case, if everything is right, we pool our samples after determining concentration and we have a pooled sequencing library. Then, we do the denaturing stuff and go into the machine.

[00:27:12] **Samantha:** Okay.

[00:27:13] **Martin:** Okay.

[00:27:14] **Samantha:** It sounds like for that case, the pre-sequencing workflow is much longer than if you're just using the MiSeq to QC. Is that correct?

[00:27:22] **Martin:** Yeah. But of course, the whole step before we QC and some Excel library, of course, we've done the Excel library in that case, which takes a very long time-

[00:27:30] **Samantha:** Hmm, okay.

[00:27:31] **Martin:** ... also. Yeah.

[00:27:32] **Samantha:** Okay. How long does that take?

[00:27:34] **Martin:** That takes about two to three days, or so.

[00:27:36] **Samantha:** Hmm. That's fine.

[00:27:37] **Martin:** Depending on where we start. If we start just with the patient sales, it can take up to a week until we have the library ready for sequencing.

[00:27:44] **Samantha:** Okay. How might it change your workflow if you could complete those tasks in less time? If, say, the library prep or all of those steps are taking two to three days, or up to a week, if that could be shorter, how might it change your workflow?

[00:27:59] **Martin:** For me, I like to work hard for one or two days and then lay back for sometime. This is just me. Other people, they really enjoy these steps that you have in your manuals. Here, you can stop and work and keep on going tomorrow. I like to do as many things as possible on one day. I know a lot of people that like to do that. If the total work time that you have to apply into your sequencing could be about 10 hours tops.

[00:28:22] **Samantha:** Okay.

[00:28:23] **Martin:** That would be perfect for me because then I would do everything on one day and be done with it. But most of the time, it takes about 15 to 16 hours because there's some PCRs that take longer and some incubation steps. Then, kind of forced to do it in two days. For me, this is always I like to be able to do everything on one day.

[00:28:40] **Samantha:** Mm-hmm (affirmative). That's really interesting.

[00:28:42] **Martin:** It would really help me with my ... Yeah. Yeah, but that might be [crosstalk 00:39:07] an exception there. I'm not sure.

[00:28:49] **Samantha:** Mm-hmm (affirmative). Absolutely. Okay. Then, what type of consumables are you using for those different steps?

[00:28:55] **Martin:** For the library preparation as well?

[00:28:57] **Samantha:** Mm-hmm (affirmative).

[00:28:59] **Martin:** It's actually not that much. Most of these library preparation kits, they come as full kits, where you don't need anything more. I, okay. Plastics. Okay. We're talking plastics. Yeah.

[00:29:10] **Samantha:** Mm-hmm (affirmative).

[00:29:12] **Martin:** Most of the time, it's PCR strips, so it's eight strips. Yeah.

[00:29:15] **Samantha:** Mm-hmm (affirmative).

[00:29:17] **Martin:** And 1.5 milliliter tubes, and lots of tips, normally. That's the consumables that we need. So consumable chemicals, we don't need, mostly, we don't need any of them except for the washing step after the sequencing. You need water and some washing material. But other than that, these kits come as full kits, where everything is included, and in only plasticware.

[00:29:39] **Samantha:** Okay. What is the unpacking process like? To unpack your consumables, is that time consuming at all, or is that quick?

[00:29:47] **Martin:** Yeah, so for the MiSeq, itself, or are we talking before MiSeq?

[00:29:50] **Samantha:** Either. Either is interesting.

[00:29:52] **Martin:** Either?

[00:29:53] **Samantha:** Mm-hmm (affirmative).

[00:29:55] **Martin:** Okay. Most of these library preparation kits, they come on dry ice. For me, it's always kind of fun to get dry ice and get something for my kids at home, so they can have a little bubble party.

[00:30:05] **Samantha:** Mm-hmm (affirmative).

[00:30:07] **Martin:** And yeah, there's nothing really to complain about that for all of these kids to come and get some paper, paper stuff, and sometimes, it's kind of annoying. You have two or three little boxes, and in each of these boxes, you have one or two tubes in them.

[00:30:21] **Samantha:** Mm-hmm (affirmative).

[00:30:22] **Martin:** Many of our colleagues leave them tubes, and they take up lots of space. I normally take them out and put them into a rack where you have every tube ready, and you don't have to open three different boxes to see whether all the chemicals that you need for one kit are there. I like visibility. One look, and I see, okay, we only have two dNTP tubes left. That's all the new kits. Because one of the crucial components is running low. This is something that's not really necessary for me, but I don't think it's possible to do it any different for the producers.

[00:30:52] Something annoying about Illumina is you have the super huge dry ice box. They have to somehow maintain it if the stuff stay at minus 20 degrees for a longer period. But they always feel over ... The dimensions are just exaggerated. Then, you have your kits in there. They are wrapped twice in plasticware. Totally unnecessary for me. You cannot open them without scissors. I think it somehow should provide an aura of exclusivisity, or something. I'm not really sure. But it's just too much plastic wrapping around the carton that you, then, have to unwrap again. Then, you have your plastic cartridge underneath finally appearing. This is a bit too much, and it's actually getting annoying sometimes. It's not really necessary.

[00:31:34] **Samantha:** Yeah, that makes sense. Being able to reduce the amount of plastic there and being able to open it without needing any scissors or anything else.

[00:31:43] **Martin:** Yeah.

[00:31:44] **Samantha:** Okay. Then, how are you disposing of all of that packaging now that you have?

[00:31:48] **Martin:** Yeah. That's always a sad story. Yeah, I do. Yeah. We do some ... We have some recycling organized in our institute, and we have the black box, the black bins, for plasticware. We have the red bins for paper and whatnot, but it's coded very complicated, so people do a lot of mistakes. But in the end, everything piles up in our three to four different bins. The big styrofoam containers, which contain the dry ice. We have some place where they go, but they are not returned to the producer.

[00:32:18] I think, if possible, there's always some return sheet included, but it's not done by the institute. We produce a lot of waste there. It's kind of sad. It always makes me a bit sad how much is produced by these styrofoam boxes. The paper wrappings of the kids is not bad. It doesn't hurt anyone as long as it's paper. And carton, it's fine. Yeah, but some plastic would be reduced in case of Illumina, how the cartridges are wrapped. Yeah, I don't know. I think you need the styrofoam for the dry ice. It doesn't work in any other way. But it's, yeah. It's lots of garbage that you produce-

[00:32:55] **Samantha:** Mm-hmm (affirmative).

[00:32:56] **Martin:** ... in that way.

[00:32:57] **Samantha:** Absolutely. Okay. Thinking about actually running the sequencer, how long does it take once you hit run, how long does the sequencer take to run?

[00:33:06] **Martin:** It depends on the cycle number, of course.

[00:33:08] **Samantha:** Mm-hmm (affirmative).

[00:33:09] **Martin:** We normally do between 100 and 150 cycles. Then, sometimes ... Last time, we did 150 cycles single end, but normally, we do between 100 and 15 cycles paired end. It takes between 11 and, I think, 21 hours. It's a long time. This is sometimes annoying. It's not running overnight, and you can do something in the morning. But you have to prepare for that. If you're not experienced, you don't get an immediate estimated runtime for that. I'm not 100% sure, but I think it's not there. You have to calculate and have some experience how long it takes. It would be nice to know whether you can take your data at 10:00 the next morning, or you can start doing analysis at 3:00 in the afternoon, and yeah. It feels very long.

[00:33:53] **Samantha:** Mm-hmm (affirmative). Okay. You said a couple of things there. If you could do it, if it could just run overnight and be ready in the morning, what would that do for you? How would that change your workflow?

[00:34:05] **Martin:** First of all, it would help me to start preparing the next sequencing run right away, and not having ... Yeah. Of course, but how does it change your workflow? Things would go faster, and yeah. I have the tendency to directly look at the data that I've been producing. Because my mind is still set in that experiment, and I'm ready to analyze mistakes in that experiment, and problems that I have with what I've been doing the day before still on my mind. There's some connection between result and the production and generation which led to that result. Once things are done at 2:00, you will not be finished with analysis on the next day. Things spread further, and things become more out of focus then.

[00:34:44] Then, you start doing analysis, but then, you will continue analysis on the next day. But things come in between. It always happens like that. That's why things normally take a week until we do the next MiSeq run. Because it kind of defragments ... The workflow is fragmentated like that. It's not I go there at 8:00 or at 9:00 and I start analyzing. I can talk with my people at 2:00, and we can make arrangements for the next day to start the next preparation with certain mistakes ruled out, or just a thumbs up that we can go on the way we've been doing it.

[00:35:15] **Samantha:** Mm-hmm (affirmative). Okay. Would it be helpful to be even less than just overnight if the turnaround time was say four hours. Would that be helpful, or is it really just the overnight turnaround time would be enough?

[00:35:26] **Martin:** Oh, that would be super helpful because the thing about this analysis, this analysis takes them like two to four hours because it's computationally intense. I think, computationally, the heavy work. If it will be done in four hours, it doesn't mean it's unimaginable to be that fast, but that would make me setup the analysis in the afternoon and have the results of that analysis of my pipeline of my workflow in the next morning. There's even ... Try to connect my workflow, which would feel like real throughput and not doing something, stopping, thinking, doing something else in between if something else comes up. It would be you could have one heavy work of doing this over and over again, and because this always reduces mistakes once you repeat things every day.

[00:36:07] **Samantha:** Mm-hmm (affirmative).

[00:36:09] **Martin:** Or every second day. You come into a routine, which is really necessary to do thing flawlessly. Yeah, that would be awesome.

[00:36:16] **Samantha:** Mm-hmm (affirmative). Okay. Great.

[00:36:17] **Martin:** Yeah.

[00:36:18] **Samantha:** Then, you were talking to me a little bit about preparing the data. What's that process like? Is there anything that could be made simpler there once the sequencer is done running?

[00:36:28] **Martin:** Yeah, I think that's what companies always think about how it can be done easier, but realistically, things are changing so fast and so quickly. Yeah, I don't think that's really feasible because the requirements are getting so diverse of what is needed in terms of data analysis, what metadata is needed, what quality control checks need to be done. I think that's why most of them all run sequencing and other tools that companies try to push through the market, they're just doomed to fail because requirements are just so diverse. The machine, it gives you fast queue output. The sequencer gives you these raw data base calls and for sample multiplexing and [inaudible 00:51:58] fast queue output, which is actually our readable, our read data, which contain already the DNA data, it's done by the machine.

[00:37:16] It's kind of quirky sometimes, and this is also not very user-friendly. But I'm just omitting the step totally because I have the bioinformatics background to do that. Yeah, I cannot really speak for other people. I think everyone expects these machines to give you fast queue files and then have someone else to keep on working with it. The machine is doing that, and it's doing it okay. Maybe, okay. Maybe one thing. As I said, people expect these tools to produce Seq queue data.

[00:37:44] **Samantha:** Mm-hmm (affirmative).

[00:37:46] **Martin:** Even there, you have different requirements how this Seq queue data is produced. For example, 10X data has its indices in a certain way, and it's cellular barcodes in a certain way, which is not compatible to most other Illumina sequencing data. But it would be very easy to have the machine demultiplex all the data. Demultiplexing means producing the fast queue files. You can only produce fast queue files of a certain standard. You cannot demultiplex 10X data. If it's not included in the machine, you have to export the raw data and do it yourself.

[00:38:16] I think, at least, an [inaudible 00:53:47] is becoming more and more standard. It would be helpful to have a choice of some standard input data of certain standard libraries if you use for the sequencing to make this machine demultiplex and output the past queues for all these different library protocols. This is not hard to program. It's actually very easy to do. But for some data, now, it takes a lot of time to get this running.

[00:38:43] **Samantha:** Mm-hmm (affirmative).

[00:38:45] **Martin:** This would be pretty helpful to have this queue output part be a bit more flexible, and user-friendly, have some graphics of interface that you can tell the machine [inaudible 00:54:36] data. It's 150 paired end. Then, the machine could know exactly what to do then, but it doesn't.

[00:39:02] **Samantha:** Mm-hmm (affirmative). Absolutely. Okay.

[00:39:04] **Martin:** Did that come across? Do you understand what I mean?

[00:39:06] **Samantha:** Yes. Yes. That makes sense.

[00:39:08] **Martin:** Yeah.

[00:39:09] **Samantha:** You were running up on time. I just have one final question for you. I'm wondering if you imagine you have a magic wand, and it allows you to change anything even if it is was the basic principles of chemistry and biology, if you could change one thing about the low throughput genetic sequencing process, what would that be? What would you want to change?

[00:39:28] **Martin:** Just one thing?

[00:39:29] **Samantha:** Yes.

[00:39:30] **Martin:** Actually, for me, it would be get rid of the DNH ring.

[00:39:32] **Samantha:** Okay.

[00:39:33] **Martin:** Give the machine a library, and I get my sequencing data.

[00:39:36] **Samantha:** Okay. If it was more than one thing, what would your next one or two things be that you would change?

[00:39:42] **Martin:** Give it the libraries and have ... Yeah, do it for an hour. Or, do it two hours of run time.

[00:39:48] **Samantha:** For two hours?

[00:39:49] **Martin:** Yeah. Make it four hours run time. That would be perfect. We'd use the run time drastically.

[00:39:53] **Samantha:** Okay. Great. I believe that was all the questions I had for you, Martin. I really appreciate this.

[00:39:59] **Martin:** Yeah. It was fun.

[00:40:00] **Samantha:** Thank you very much. Have a great rest of your day.

[00:40:03] **Martin:** It's always nice to think about your work. Yes. Goodbye.

[00:40:06] **Samantha:** [crosstalk 00:56:29] system for us as well. Okay. Have a good one.

[00:40:11] **Martin:** Yeah, you too. Bye, Samantha.

[00:40:13] **Samantha:** Yeah.