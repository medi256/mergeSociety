import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Why We Need a Translator in Programming and What a Compiler Really Is | Programming Tutorial",
  description:
    "Learn why translators are essential in programming and understand what a compiler really is. Complete guide with practical C programming examples, Code::Blocks walkthrough, and executable creation process.",

  openGraph: {
    title:
      "Why We Need a Translator in Programming and What a Compiler Really Is",
    description:
      "Complete guide to understanding compilers in programming. Learn the difference between high-level and low-level languages, see practical compilation examples, and understand executable creation.",
    type: "article",
    url: "https://www.mergesociety.com/code-report/what-is-a-compiler",
    siteName: "Merge Society",
    locale: "en_US",
    images: [
      {
        url: "https://img.mergesociety.com/mergesociety/audio_1758351295832_fnxuwq_apk5yu_ue3k3d.jpg",
        width: 600,
        height: 400,
        alt: "Why We Need a Translator in Programming and What a Compiler Really Is",
        type: "image/jpg",
      },
    ],
    authors: ["Massa Medi"],
    publishedTime: "2025-09-21T00:00:00.000Z",
    modifiedTime: "2025-09-21T00:00:00.000Z",
    section: "Programming Tutorial",
    tags: [
      "compiler",
      "programming",
      "translator",
      "C programming",
      "binary code",
      "executable",
      "high-level language",
      "low-level language",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Why We Need a Translator in Programming and What a Compiler Really Is",
    description:
      "Complete guide to understanding compilers in programming. Learn with practical examples and Code::Blocks walkthrough.",
    images: [
      "https://img.mergesociety.com/mergesociety/audio_1758351295832_fnxuwq_apk5yu_ue3k3d.jpg",
    ],
  },

  keywords: [
    "compiler",
    "programming translator",
    "high-level programming language",
    "low-level programming language",
    "binary code",
    "executable file",
    "C programming",
    "Code::Blocks IDE",
    "source code compilation",
    "machine code",
    "programming tutorial",
    "software development",
    "compiler vs interpreter",
    "executable creation",
    "programming basics",
  ],

  authors: [
    {
      name: "Massa Medi",
      url: "https://www.instagram.com/medi45.of",
    },
  ],

  alternates: {
    canonical: "https://www.mergesociety.com/code-report/what-is-a-compiler",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Programming Tutorial",

  other: {
    "article:author": "Massa Medi",
    "article:published_time": "2025-09-21T00:00:00.000Z",
    "article:modified_time": "2025-09-21T00:00:00.000Z",
    "article:section": "Programming Tutorial",
    "article:tag": "compiler,programming,translator,C programming,binary code",
  },
};

const Page = () => {
  return (
    <div>
      <div className="lesson-wrapper">
        <div className="lesson-sidebar"></div>
        <article className="lesson-container">
          <header>
            <h1>
              Why We Need a Translator in Programming and What a Compiler Really
              Is
            </h1>

            <Image
              src={"/mergesociety/audio_1758351295832_fnxuwq_apk5yu_ue3k3d.jpg"}
              alt="Why We Need a Translator in Programming and What a Compiler Really Is"
              width={600}
              height={400}
              priority
            />
            <h2 className="project-info">
              <span className="project-title">
                <Link href={"https://www.instagram.com/medi45.of"}>
                  Written by Massa Medi
                </Link>
              </span>
              <time className="project-date" dateTime="2025-09-21">
                | September 21, 2025
              </time>
            </h2>

            <p>
              In the last presentation we saw the definition of Python
              programming. That set the base and now we are ready to understand
              what a compiler is. So without any further delay, let's get
              started and see all the topics of this presentation one by one. I
              am keeping the flow exactly as I explained it live, only now you
              get the written version you can read, revisit, and share.
            </p>
            <p>
              There are only two topics we need to cover in this presentation:
            </p>
            <ul>
              <li>Why do we need a translator?</li>
              <li>What is a compiler?</li>
            </ul>
            <p>
              We will first try to understand why we need a translator. Then we
              will go deep into what a compiler is. In the next presentation we
              will understand what an interpreter is and we will try to
              understand the differences between the two. We will understand
              these two topics in detail, keeping it simple but complete enough
              that you can connect every dot.
            </p>
          </header>

          <section id="why-do-we-need-a-translator">
            <h2>Why Do We Need a Translator?</h2>
            <p>
              A translator is needed and there is a strong reason behind this.
              Generally, a computer program is written using a high level
              programming language. A high level programming language is a
              language which we humans can understand better. On the other hand,
              a low level programming language is a language which machines can
              understand better. This split is the root of the whole story.
            </p>
            <p>
              We only know the high level programming language very well. When I
              say high level, I mean languages like C, C++, Java, Python. These
              are all high level programming languages. You can think of them as
              languages designed to be readable, writable, and maintainable by
              humans. The syntax looks like English keywords, the structure is
              organized, and the intention is clear. Developers think at the
              level of variables, loops, functions, and algorithms.
            </p>
            <p>
              The problem is that only humans are capable of understanding these
              languages and machines cannot understand these languages. Machines
              can only understand the language of 0s and 1s. That is binary
              language. There are no human-friendly keywords there, only bits
              and patterns that correspond to very specific machine
              instructions. If you peeked inside the CPU, all it does is fetch,
              decode, and execute binary instructions. No if-else statements
              look like if-else there. It is all opcodes and operands
              represented as 0s and 1s.
            </p>
            <p>
              This is the reason why we need a translator. You can understand
              that there is a communication gap between humans and machines.
              Humans are capable of understanding high level programming
              languages. On the other hand, machines are capable of
              understanding low level language or binary language. Without a
              bridge, your beautifully written code is just text to the machine.
              With a bridge, it becomes executable action.
            </p>
            <p>
              So this is the reason why we need a translator. A translator is a
              piece of software which converts a high level language code to the
              binary language code which machines can understand. The job of a
              translator is to convert high level language code to binary code
              so that machines eventually can understand better. We want our
              machines to understand the language, the things that we want them
              to convey. This is the reason we need a translator. As we know
              machines cannot understand high level language, we need a
              translator to convert the high level language code to the binary
              language code which machines eventually can understand. Now you
              know why we need a translator and why it sits between you and your
              CPU like a professional interpreter at a meeting.
            </p>
            <aside>
              <p>
                Quick recap: humans write high level code. Machines understand
                binary code. A translator converts between the two so the
                program can run. No translator, no execution.
              </p>
            </aside>
            <p>
              There is one more thing I would like to tell you. There are two
              types of translators. One is called a compiler and the other one
              is called an interpreter. In this presentation we will try to
              understand what a compiler is. In the next presentation we will
              understand what an interpreter is and we will try to understand
              the differences between the two. We will understand these two
              topics in detail, one after the other, so the contrast becomes
              obvious and useful when you write and run programs.
            </p>
          </section>

          <section>
            <p className="mt-6 text-sm sm:text-base">
              Prefer watching instead of reading? You can watch the full
              walkthrough below, or keep scrolling to read the complete article.
            </p>

            <div
              className="relative mt-3 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/zIjI8H945T8?si=IYPcxtHqZkAvcLGm"
                title="Why We Need a Translator in Programming and What a Compiler Really Is"
                loading="lazy"
                fetchPriority="high"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>

          <section id="what-is-a-compiler">
            <h2>What Is a Compiler?</h2>
            <p>
              Now let's see what a compiler is. A compiler is a complex piece of
              software whose job is to convert source code to machine
              understandable code or binary code in one go. So a compiler is a
              piece of software. This is the first thing. Many people have this
              confusion that a compiler is a hardware device that you plug in or
              a chip on the motherboard. No. A compiler is software, and that
              too a complex piece of software. It is very complex. It has a lot
              of functionality tucked inside, even though we trigger it with a
              simple command like Build or Compile.
            </p>
            <p>
              The good thing is that we don't have to understand each and every
              detail about a compiler, because understanding all those details
              is out of the scope of this course. What you should carry with you
              is the correct mental model: a compiler takes your source code -
              the code we humans can understand - and converts it to machine
              understandable code or binary code - the code which the machine
              can understand. That conversion is done in one go for the whole
              program. That is a key point.
            </p>
            <p>
              When I say one go, I mean the compiler reads your entire source
              program, processes it, checks it for correctness, and outputs an
              executable or some lower-level representation that is ready to run
              or link. You write your code, then you compile, and you get an
              executable that can be run directly by your machine. That path is
              different from an interpreter, which we will talk about next time.
              For today, remember this: the compiler converts source code to
              machine code in one go.
            </p>
            <p>
              To make this definition stick, I want to give you an example to
              help demonstrate how a compiler works. We will use a small, clear
              program so you can see the full journey from human-readable code
              to a machine-executable file, and then actually run it on a
              different machine to show the benefit of compilation.
            </p>
          </section>

          <section id="compiler-example">
            <h2>A Concrete Example: Compiling a C Program</h2>
            <p>
              Let's say that this is my machine and this is my friend's machine.
              In my machine I have written this code which is a C programming
              code. The program includes the necessary header for input-output,
              it has a main function, it declares variables, assigns them
              values, adds them, and prints the result. It is short by design,
              so we focus on the compilation flow instead of chasing bugs or
              complex logic.
            </p>
            <p>Here is the shape of the code I am talking about:</p>
            <pre>
              <code>
                {`
#include &lt;stdio.h&gt;
#include &lt;conio.h&gt;

int main() {{
    int sum;
    int a = 10;
    int b = 20;

    sum = a + b;
    printf("%d", sum);

    getch(); // holds the screen
    return 0;
}}
    `}
              </code>
            </pre>
            <p>
              In the transcript you heard the essence: include stdio h, int
              main, int sum, a equal to 10, b equal to 20, sum a, b, and then a
              printf function which is used to print sum on the screen. Now here
              I am trying to calculate the sum of A and B. We know that A is 10
              and B is 20. Therefore the sum must be 30 because 10 plus 20 is
              30. Eventually I want to print the sum on the screen, which means
              I want to print 30 on the screen. So with the help of this program
              we will get the output 30. That is the behavior we expect and we
              will verify it after compilation.
            </p>
            <p>
              Now you might be wondering, this course is all about Python, so
              why did I take a C programming code? The reason is pretty simple.
              C programming language is a compiled programming language. This
              means it uses a compiler for its translation. And as we are
              talking about a compiler in this presentation, we need to consider
              a compiled programming language. That is why I took a C
              programming code. I hope now it is clear to you. It is not about
              switching the course to C. It is about using the right tool to
              show what a compiler does.
            </p>
            <p>
              So I have written this C programming code and what I want to do
              now is provide this code to a compiler. This means I want to
              compile this code before running this code. It is important to
              compile this code so that the compiler will first translate this
              code to machine executable code. Eventually that executable code
              will run on the machine and the machine will perform the task.
              That is exactly what we want.
            </p>
            <p>
              So let's provide this code to the compiler and let's see what the
              compiler will produce. If you provide this code to a compiler, the
              compiler in return will produce an executable code. This code is
              called an executable code because we can directly run this code on
              our machine. We need to understand this term. Executable means a
              file your operating system can run directly, without needing the
              source code or the compiler again. It is the packaged result of
              compilation.
            </p>
          </section>

          <section id="executable-extensions-and-platforms">
            <h2>Executable Extensions on Different Machines</h2>
            <p>
              Now let's talk about what that executable looks like depending on
              the operating system. If my machine is a Windows machine, then my
              executable should have an extension exe. Understand this thing. If
              I compile my code on a Windows machine, then the executable must
              be having an extension .exe. That extension signals to Windows
              that the file is a program it can run.
            </p>
            <p>
              If, let's say, my machine is a Mac machine and if I compile this
              code on a Mac machine, then I will get an executable with app
              extension. So extension matters because this code is capable of
              running on Windows machines only if the extension is exe. If the
              extension is app, then the code is capable of running on a Mac
              machine. The main takeaway is that compiled executables are
              platform-specific. The compiler builds a program that matches the
              operating system and environment it was compiled for.
            </p>
            <p>
              So let's say that my machine is a Windows machine. Then in that
              case the executable must have an exe extension and this code is
              capable of running on Windows machines only. That single
              executable can be carried to a different Windows computer,
              double-clicked, and it will run independently of your source code.
              This is one of the practical benefits of compilers.
            </p>
            <p>
              Now let's say that my friend's machine is also a Windows machine
              and what I will do is provide this code to my friend and ask him
              to execute this code. This means I want my friend to run this
              code. After running this code we will get this output, that is 30.
              Note this very clearly: I have compiled the code on a different
              machine - my machine - and we are running the code on a different
              machine. Compilation means that the code will get converted to an
              executable and eventually we can provide this executable to any
              machine and any machine is capable of running this code, as long
              as it matches the platform we compiled for.
            </p>
            <p>
              One thing that we need to remember is that if we compile the code
              on a Windows machine, then we will get an executable with exe
              extension. So note this: this executable is capable of running on
              any Windows machine. I am saying any Windows machine. My friend
              should have a Windows machine in order to run this code. I am
              assuming that my friend's machine is also a Windows machine. So he
              can run this code and after running the code he will get this
              output, that is 30. I hope now it is clear to you why the
              extension and the platform matter.
            </p>
          </section>

          <section id="ide-walkthrough-codeblocks">
            <h2>Live Walkthrough: Compiling in Code::Blocks IDE</h2>
            <p>
              Now I would like to take you to the IDE or Integrated Development
              Environment where we will compile this code and we will see the
              executable precisely. I will take you to the Code::Blocks IDE
              where we will compile this C program. So let's move to the
              Code::Blocks IDE.
            </p>
            <h3>Seeing the Source File in the Project</h3>
            <p>
              Now we are in Code::Blocks IDE and you can observe the same C
              program, and the file name is sum.c. On the left, in the project
              tree, you would see the file listed. In the editor area, the code
              appears with syntax highlighting: include lines at the top, main
              function in the middle, and a printf call followed by getch near
              the end.
            </p>
            <p>
              Now this file is available in the C Programs folder and I want to
              show that C Programs folder to you. So let me take you to that C
              Programs folder which is available on my desktop. Visually,
              imagine the Windows File Explorer open, the Desktop selected on
              the left pane, and a folder named C Programs right in the main
              area.
            </p>
            <h3>Checking the File Location and Extension</h3>
            <p>
              Now we are on my desktop and here we have the C Programs folder.
              Let's open this folder. In this folder we have this sum.c file. We
              can always check the extension of this file by right clicking on
              this and then clicking on Properties. You can observe this is C
              source file and the extension is .c. This is the same file where
              we have our C program. Let's click on OK and let's get back to our
              IDE. This is a good habit, by the way - knowing where your files
              live on disk and what their extensions are.
            </p>
            <h3>Why include conio.h and use getch</h3>
            <p>
              You might have observed this already that in this C program I have
              added two lines: include conio h and getch. The getch function is
              needed and for this I need to include this header file conio.h
              because getch function is available in this header file only. Now,
              what exactly is getch doing here? This getch function is needed to
              hold the screen of the executable.
            </p>
            <p>
              After compiling this code, we will get an executable. We know this
              already. Now that executable will get stored in the same folder
              where this sum.c is stored. That is, we will get an executable in
              C Programs folder. If we double click on that executable - this
              means if we run that executable - we would be able to see the
              screen of the executable only for few seconds and then it will go
              away. On Windows, console programs open a new terminal window,
              print, and close immediately when they finish. In order to hold
              the screen, we need this getch function.
            </p>
            <p>
              getch means "get character". This function allows the user to
              enter a character on the screen - that is, on the executable's
              console screen. So this function holds the screen until the user
              enters a character. Now it could be any character. It could be
              Enter also. So it depends upon the user. You will see in a moment
              that when we run that executable, we will observe a blinking
              cursor which asks us to enter some character.
            </p>
            <h3>Building the Program</h3>
            <p>
              So now let's compile this code and let's see whether the
              executable is available in the same folder or not. In
              Code::Blocks, let's click on this Build. We need to click this
              Build. Build means compile. Ok, so let's click on this Build.
            </p>
            <p>
              Now the build is successful, which means compilation is
              successful. There is no error as you can observe. The status bar
              shows "Build finished" and the log area prints lines that end with
              "0 errors, 0 warnings". That is exactly what we want to see.
            </p>
            <h3>Seeing the Output Files</h3>
            <p>
              Now let's get back to the same folder. You can observe that there
              are two more files in this folder. This is sum.exe file and this
              is sum.o file. The .o file is an object file. It is an
              intermediate file generated by the compiler during the build
              process. We don't have to worry about this at this moment. What we
              need to consider at this moment is this sum.exe file. This is our
              executable which we can run on any Windows machine.
            </p>
            <p>
              You can check the extension of this file by right clicking on this
              and then clicking on Properties. Here we can observe that this
              file has extension .exe. Let's click on OK and now let's run this
              file by double clicking it.
            </p>
            <h3>Running the Executable and Holding the Screen</h3>
            <p>
              You can observe the output is 30 and there is one blinking cursor.
              Here it is asking a character from us. The console window shows
              the number 30, and then the cursor sits right next to it,
              blinking. Let's say I provided it a character H. Observe that the
              screen is closed. So after providing the character the executable
              will go away. That is precisely the effect of getch - it keeps the
              program open until a key is entered.
            </p>
            <p>
              So in this way we can run our executable and we can provide this
              executable to any Windows machine. Now any Windows machine is
              capable of running this executable. I can provide this executable
              to my friend as my friend has a Windows machine. So he can run
              this executable without the need of this C file. Now he will not
              compile this file. He will just use this executable and run this.
            </p>
            <h3>The Key Benefit: Shareable, Runnable Artifact</h3>
            <p>
              After compilation, we now know that we will always get an
              executable and that executable is capable of running on any
              Windows machine. Remember that I have compiled this sum.c file in
              my Windows machine. This is the reason why I am getting a .exe
              file and now this file is capable of running on any Windows
              machine. So this is all we need to know for the compiler flow in
              this example.
            </p>
          </section>

          <section id="recap-and-next">
            <h2>Recap and What Comes Next</h2>
            <p>
              So up to now we have learned why we need a translator and what a
              compiler is. We saw that a translator bridges the gap between
              human-friendly high level languages and machine-friendly binary.
              We saw that a compiler is a complex piece of software, not
              hardware, that takes your entire source code and converts it to
              machine code in one go. We walked through a real C program,
              compiled it in Code::Blocks, got a sum.exe executable, ran it,
              watched the output 30, and watched the console wait for a
              character because of getch.
            </p>
            <p>
              In the next presentation we will see what an interpreter is. We
              will talk about how it differs from a compiler, where each one
              shines, and why languages like Python use interpretation
              differently than C uses compilation. That side-by-side comparison
              will make the big picture crystal clear.
            </p>
            <p>
              So this is it for now. Thank you for watching this presentation,
              and now you have it in written form too. Keep this open as a
              reference when you compile your first program and when you share
              your first executable with a friend.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Page;
