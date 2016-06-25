# lets-learn-vi(m)



## Introduction



### Background

`vi` is a text editor that is built into many operating systems and henceforth built into terminals. It's rather plain and can be intimidating at first, but can be a lot of fun to learn, and when mastered, significantly improve your ability to edit text.



### Alternatives

`vim` is "an improved version of the `vi` editor" while `emacs` and `nano` are some alternatives. My Macbook Pro runs `vim` whenever try to run `vi`, but I'll continue to refer to our text editor of discussion as `vi` for brevity.  



### Use Case 

An advanced use case might arise when you're only able to access a different computer from your terminal (eg, a server located somewhere in the middle of the ocean), and you need to edit some text files on it. With no other "regular" text editor like Sublime Text, Atom, or Visual Studio Code available, you'll have to use `vi` or a similar alternative.

A use case you may be more familiar is writing a `git commit` message when you haven't yet (or can't) [associate a non-default text editor with Git]. Trying to use `vi` without a proper introduction can be a psychological barrier and a distraction from what whatever we're trying to do. Fortunately, there are many resources out there (like the document you're reading right now) that can help guide us.


[associate a non-default text editor with Git]: https://help.github.com/articles/associating-text-editors-with-git/



### Modes

When you enter a `vi` session, your cursor will be on the first character of the document in *normal mode*. You can navigate (eg, move your cursor up/down/left/right) and manipulate text (eg, copy/paste). You can usually return to normal mode by pressing `ESC`.

*Insert mode* is designed to insert new text. You can enter insert mode from normal mode by pressing `i`, and return to normal mode by pressing `ESC`.

*Command Mode* allows us to enter commands that save the file, quit out of `vi`, etc. Type `:` from normal mode (press `ESC` to get to normal mode), and you'll see a single line at the bottom of your terminal where you can type in commands like:

* `:q` to quit*
* `:q!` to quit and discard any changes
* `:w` to write (aka save) the file
* `:wq` to write (aka save) the file and quit 

\* If you've made changes and attempt to exit with `:q`, `vi` will alert you with an error that can be avoided with `:q!` or `:wq`.

Read more about 3 new modes that `vim` introduced [here].

[here]: https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes



### Your First Time

`vi` is often set as the default editors for many computers. Chances are, you'll accidentally stumble across it when you're prompted to write some text after running `git commit`.

If you find yourself in `vi`, I highly recommend typing the following command: `:set showmode`; when you type `:`, you will enter command mode at the very bottom of `vi`; `:set showmode` should be the entirety of the command, so there is no need to press `:` twice. Double check that your `Caps Lock` is off as `vi` is case sensitive!

To get started with writing in what's essentially a blank text file, press `i` on your keyboard to enter insert mode, and type out whatever you wanted to. Try using the up, down, left, and right keys to see if you can move your cursor while you're in insert mode. When you're done, push `:` to enable command mode ([see above]), type `wq` to write (aka save) your file and quit, and push `enter` to submit your command. You did it!

[see above]: #mode



## Learn More

To learn more about `vi` so you can thoroughly impress your friends, family, and coworkers, look up the myriad of resources available online. Remember, one of the best ways to learn something new is to *fully commit to it*! Don't be afraid to use `vi` as your text editor of choice. Below are a few I found that you can use to ease your journey into the `vi`/`vim` world: 



### Cheat Sheets

* [Vi Cheat Sheet](http://www.lagmonster.org/docs/vi.html)
* [Advanced Vi Cheat Sheet](http://www.lagmonster.org/docs/vi2.html)
* [Linux Tutorial - Vi Cheat Sheet](http://ryanstutorials.net/linuxtutorial/cheatsheetvi.php) *a bit more nicely formatted than the above*



### Interactive Learning Tools

* [VIM Adventures](http://vim-adventures.com/) *VIM Adventures is an online game based on VIM's keyboard shortcuts. It's the "Zelda meets text editing" game. So come have some fun and learn some VIM!*
* [Interactive Vim tutorial](http://www.openvim.com/)
* [ShortcutFoo](https://www.shortcutfoo.com/) *Learn shortcuts and commands*



## Closing

Thanks for reading this compilation of resources. Have fun learning `vi`, and please send in pull requests for any suggestions for improvements!
