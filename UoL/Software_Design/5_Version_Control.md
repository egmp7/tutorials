# Git design Goals

## Why do we need version control

Specific scenarios to use version control

### Terms for the software lifecycle

When working on a project, the developer will create files of code prior to release it. Then, in the future the developer will make changed, add new features, fix bugs, etc. So th developer needs to release a new version of the project

### One developer one release

One developer will create a new version and will replace everything that was before. Example: website

### Many release

There are different releases of versions of a software. Example: Desktop program

### Bug fix old release

The operating system was updated so the old version needs to be fix

### Merge bug fix

The bug exists in multiple version of the software and becomes more complicated to fix

### More than one developer

The problem happens when the code from one developer interacts in an unwanted manner with the code of the other developer.

## Design goals of git

- Distributed
- Good performance
- What comes out is what came in (file corruption checking)

### SCCS

Early example of a code management system

### CVS

Dick Grune releases the CVS system, which allows him to interact with his students working on code together

###  Linus Torvarlds

In 2005, Linus releases or starts working on the Git System to manage the Linux Kernel code

*Tarballs and patches ... is a much superior version control system to CVS*

A tarball is, so task stands for taper, archive it's a unix way of creating. It's like a zip file but doesn't have to be compressed,

### BitKeeper

They use BitKeeper and I think that the design of a BitKeeper somewhat inspired Git. But the problem with BitKeeper was that it was actually a proprietary system, so you have to pay to use it, but it was made available by the developer for open-source projects for free. The Linux kernels develop on BitKeeper for free.

### Distributed development

- Subversion(SVN/CVS) has a central server you must write to
- Instead, do everything without having to access the server
- Branching and merging is for inherent and for everyone
- Everyone has commit access - if your branch is better, great

# Basic git operations

## Git Commands

```
git config --global user.name “your full name”
git config --global user.email “your email”
```
Config

    git init
This command initializes the Git tracking inside a folder.

    git status
This command checks the status of the tracking. Were there any changes inside the folder?

    git add
This command adds the content of the folder to a holding zone ready to be committed. See it as a way of checking your folder content before the final save.

    git reset
This command removes the content ready to be committed from the holding zone. If you change your mind before finalizing your save, you can use git reset to remove files from your commit.

    git commit -m”project version recorded”:
    git commit -a -m "Commit without add."
This command permanently records the status of the project at a specific point in time. The message in quotes can be arbitrary, it normally describes the changes that were made.

    git log
This command shows a list of all the previous commits in case you want to retrieve or check an older version of the project.

    git checkout
This command lets you navigate and eventually restore older versions of your project.

    git commit --amend

Edits the previus commit
### Local Git: What happens visually?

**Working Directory:**
The working directory corresponds to the folder which has a git tracking enabled. In the previous example the folder Animals was our project working directory.

**Staging Area:**
The staging area corresponds to the holding zone. When running the git add command, the files are added to this intermediate zone. All files standing in this zone are ready to be committed.

**Local Repository:**
The local repository is the place where all of your committed project versions are stored. Running the git log command will show the content of this repository, showing each project version with corresponding id, name and description.

### Collaborative Git: What happens visually?

Remote Repository:
The remote repository is a copy of your project that is hosted on the Internet. Going back to our Animals folder, it is like having a copy of the folder hosted on the Internet which is accessible by other people. The project owner, of course, sets different privileges to who can access the project and modify it.

You can also see that there are three new Git commands when it comes to using Git in a collaborative way:

    git push
This command permanently records the status of the hosted project at a specific point in time.It takes your latest local committed project version and adds the changes to the hosted version of the project.

    git pull
This command retrieves the latest version of the hosted project to your working directory and, if required, it merges the differences between your local version of the project and the hosted one.

    git fetch
This command is similar to git pull but instead of retreating the latest version of the hosted project, it will only synchronize your local version of the project with the hosted one.

## Branching and Merging

    git branch -l

List all branches

    git checkout -b first_branch

Creates a new branch

    git merge first_branch

Copies branch to whatever branch is selected

    more <file>

Shows lines of conflict

## Examining remote repositories

- Github
- Gitlab
- Gitea

So the difference between a local Git system and an a remote one Is that, on your local system, it's only ever going to be sitting on your file system. And you have equal kind of privileges in that, you can do everything with the Git tool that you could do on a server, you can get branches, you can have commits and all of that stuff. But the problem is, you then can't share that with anyone else. And so these these systems allow you to get your Git repository, and essentially make a copy of it on a server central server that other people can then clone from. And there's also a way if you then on your local repository make changes, you can push those up to the central server, and then other people can pull those down


# Analyzing git repositories

## More on git log

    git log --pretty=reference

Compact view

    git log --pretty=full

Commit message, you got the branch, and you got the user, and various other thing

    git log --pretty=fuller

Full information

    git log -3

Last three messages

## Visualizing git repositories with git log

    git log --graph --oneline --decorate --all (optional) --pretty=reference

Shows a graphical commit history, helpful when there is diversion between branches

## Visualizing git repos with ungit

Interactive Visualization Tool for github

    https://github.com/FredrikNoren/ungit
    
**Clone Ungit** 

    node node_modules/ungit/bin/ungit

    //or

    ./node_modules/ungit/bin/ungit

**Run**

### Requirements

 - Node.js

# Github profiles and FLOSS

## FLOSS

Free or libre open source software.

### Licences

 GNU license, you can certainly make commercial products with it. But then you have to always release any edits you make to the code to the public. So sometimes the GNU license can be too restrictive for the way that certain companies work. Whereas maybe the MIT license is another open source license, is less restrictive on what commercial companies can do with the code.

 ## Why joining

 - Learning
 - Community
 - Contribute to knowledge
 - Profile

