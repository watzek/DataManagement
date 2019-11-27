---
category: [maintain]
---

No matter where you data is living, you’ll want to take some precautions when working with it to be sure you can preserve your raw data even after you’ve done whatever analysis or processing that you need to do.

#### Copies

It's important to keep several copies of your data while you're working on it. This graphic summarizes a simplified plan of what copies to keep:

![1]

#### Logging of changes

It's important to log changes you make. If you're using a version control system, it should automatically do at least some logging of your changes, as well as keeping track of previous versions of your data. See the section on version control for more information.


#### Here/Near/Far Principle
Your copies of datasets should be kept in many places. At least, you should keep one local copy, one external local copy, and one external remote copy.
![2]
This is also called the Here/Near/Far principle.
![3]
Here is an example of how it may be implemented in practice.
![4]

#### Backup Procedure
When you're backing up data:

- Consider what would be required to restore research data in the event of data loss. 
- Depending on your research project, you may want to perform full, differential, or cumulative backups. 
    - A full backup will replicate all the files on your computer. Full backups take a long time and require the most storage space. However, full backups are also the most complete and can restore data quickly. 
    - A differential incremental backup copies only those files that have changed since the last incremental or full backup. To run differential incremental backups you must first create a full backup as a point of reference. Incremental backups are fast and require the least storage space. However, restoring data using incremental backups is time consuming and requires each differential incremental backup made since the last full backup.  	
    - A cumulative incremental backup copies only those files that have changed since the last full backup. A complete backup is created if no previous backup was done. Using a cumulative incremental backup procedure, you would need only two data sets to restore your files, your last full backup and your last differential backup. 
- Think about backup frequency: how often does your data change?

#### How long should data be kept?

Retention policy set by institution/funding agency should:
- Corroborate research findings
- Promote reuse
- Support open data initiatives
- Support intellectual property rights

You can also self-determine your data lifecycle by answering:
- How long are you going to need it?


#### Summary

In general: Back up your data!
- Pick a strategy
- Be consistent
- Audit your approach




[1]:/img/data-storage/flow.png
[2]:/img/data-storage/here.png
[3]:/img/data-storage/near.png
[4]:/img/data-storage/far.png