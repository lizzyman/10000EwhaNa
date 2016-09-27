**ManEwhaNa (만이화나)**
===

[TOC]

---
### 1. Overview
만이화나 : 만(10,000) 명의 이화인, 그리고 나
You can use all of **Slack** functions with **ManEwhaNa**.
This project helps your **team activity** be easier. 
And this project is specialized to **Ewha Womans University Students**.

This project provides find the *co-empty class time and empty classroom* in Ewha. It also  send the *files to your email*, alert your *schedule deadline* and calculates the *shortest path in Seoul subway*.

> **Note:** 팀프로젝트를 하면 많이화나.
> (Team project makes you very angry.)


---
###2. How to use
#### - Find an **empty class time** 
Store your timetable with (command)
and find the co-empty class time automatically. 
		
		$*fec [day1] [empty_classes] ... [day5] [empty_classes]
		>>day [co-empty class time]


#### - Find an **empty classroom** at specific time
Enter the specific time and building.

		$*fecr [day] [class] [building]
		>>building [empty classroom]



#### - Send the **files to user's email**
Enter the file identification number 
and this module sends the file to user's email automatically.
	
		$*sendE [file identification number]
		>>Send the file to user's email 

#### - **Alert the deadline** of schedule
	Enter the schedule and alert time you want,
	and show the alarm on the chatting space.
	
		$*alert [schedule_name] [end date] [alert time]
		>> At that time, Show alarm on the chatting space


#### - Find the **shortest path in subway**
Enter departure/arrival station 
and show the during time and transfer station(Optional).

		$*sub [departure station] [arrival station]
		>>[departure St] [arrival St] [time] [transfer St (Optional)]
		
#### - Show **how to use manewhana**
Enter *help and show the commands of manewhana.

		$*help
		>> This is how to use Manewhana Module
		>> ...
		


---
###3. Team - the Workers
<i class="icon-user"></i>Yukyung Cha (<yukyung1994@gmail.com>)
<i class="icon-user"></i>Jisu Lee (<lizzysoo00@gmail.com>)
<i class="icon-user"></i>Minjin Jo (<jominjin95@gmail.com>)
SungSoo Park (Adviser) and Suyeol Yang (Mento)

This project is designed as graduation project of *Ewha Womans Univ. Computer engineering dept..*

---
###4. Futures Directions
 - There is 

---
###5. References
[<i class="icon-provider-github"></i> theWorkers-github](https://github.com/lizzyman/10000EwhaNa) : manewhana github
[Slack Open API](https://api.slack.com/)



