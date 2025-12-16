import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title:
    "Mixing Programming Languages in One Executable: Compilers, Linkers & ABIs Explained",
  description:
    "Learn how to combine Rust, C, Fortran, assembly, and more into one executable. Understand compiler pipelines, linking, ABIs, and real-world multi-language programming techniques.",
  keywords: [
    "mixing programming languages",
    "multi-language executable",
    "compiler pipeline",
    "linker tutorial",
    "ABI explained",
    "Rust and C interop",
    "Fortran C integration",
    "static vs dynamic linking",
    "compilers",
    "linker",
    "ABI",
    "FFI",
    "GCC",
    "Rust",
    "C",
    "Fortran",
    "systems programming",
    "static linking",
    "dynamic linking",
    "calling conventions",
    "object files",
    "assembly",
    "PLT",
    "GOT",
    "ELF",
    "shared libraries",
    "bindgen",
    "cgo",
    "how multiple languages run in one executable",
    "mixing programming languages",
    "how compilers work",
    "how linkers work",
    "how ABIs work",
    "how FFIs work",
    "how to call Rust from C",
    "how to call C from Rust",
    "how to call Fortran from C",
    "how to call C from Fortran",
    "how to call assembly from C",
    "how to call C from assembly",
  ],
  alternates: {
    canonical:
      "https://www.mergesociety.com/latest/mixing-programming-languages-in-one-executable",
  },

  openGraph: {
    title:
      "Mixing Programming Languages in One Executable: How It Really Works",
    description:
      "A complete guide to combining Rust, C, Fortran, assembly, and more into a single executable. Understand compilers, linkers, ABIs, and real-world interop patterns.",
    url: "https://www.mergesociety.com/latest/mixing-programming-languages-in-one-executable",
    siteName: "Merge Society",
    images: [
      {
        url: "https://img.mergesociety.com/mergesociety/audio_1755156447127_jxw889_dpoz18_ciba1b.webp",
        width: 1200,
        height: 800,
        alt: "Mixing Programming Languages in One Executable",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mixing Programming Languages in One Executable: How It Really Works",
    description:
      "Step-by-step guide on combining multiple programming languages into a single executable using compilers, linkers, and ABIs.",
    images: [
      "https://img.mergesociety.com/mergesociety/audio_1755156447127_jxw889_dpoz18_ciba1b.webp",
    ],
  },
};

export default function MixingLanguagesExecutableArticle() {
  return (
    <div className="lesson-wrapper">
      <div className="lesson-sidebar"></div>
      <article className="lesson-container">
        <h1>
          Mixing Programming Languages in One Executable: How Compilers,
          Linkers, and ABIs Make It Work
        </h1>
        <Image
          src={"/mergesociety/audio_1755156447127_jxw889_dpoz18_ciba1b.webp"}
          alt="Mixing Programming Languages in One Executable: How Compilers, Linkers, and ABIs Make It Work"
          width={600}
          height={400}
          priority
        />
        <h2 className="project-info">
          <span className="project-title">
            <Link href={"https://www.instagram.com/mergesociety_/"}>
              Written by Massa Medi
            </Link>
          </span>
          <time className="project-date" dateTime="2025-08-14">
            | August 14, 2025
          </time>
        </h2>
        <p>
          Hi friends, I am George from mergesociety. Today we are going to
          explore low-level realities that most developers never think about
          unless they have to squeeze speed from metal or stitch together
          systems code from different worlds. If you have ever wondered how
          projects combine Rust, C, Fortran, assembly and more into a single
          program that runs as one process, this is your guide.
        </p>

        <section>
          <h2>Why Some Projects Use Multiple Languages In One Process</h2>
          <p>
            Some multi-language projects are easy to picture. A typical Django
            stack uses Python for the backend and HTML, CSS, and JavaScript in
            the browser. That is two sides talking over the network. Two
            different processes. Clear mental model.
          </p>
          <p>
            But what about projects where components written in different
            programming languages are meant to run together inside one process,
            sharing the same memory and the same address space? That is where
            people get confused. If languages have different compilers,
            runtimes, and memory models, how do they live inside one executable
            file without falling apart at runtime?
          </p>
          <p>
            The short answer is: the toolchain and the linker make it possible.
            The longer answer is far more interesting, and it changes how you
            understand compilers entirely.
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
              src="https://www.youtube-nocookie.com/embed/XJC5WB2Bwrc?rel=0&modestbranding=1"
              title="Mixing Programming Languages in One Executable — Video Walkthrough"
              loading="lazy"
              fetchPriority="high"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2>Compilers Are Not Magic Boxes - They Are Pipelines</h2>
          <p>
            A common myth says compilers turn source code straight into an
            executable file. That is the final outcome, but not the process.
            Real compilers are pipelines. They transform code through multiple
            stages, and at each stage the output is a different kind of
            artifact. Knowing these stages is the key to mixing languages
            safely.
          </p>

          <section>
            <h3>A C Program Walkthrough On GNU Linux With GCC</h3>
            <p>
              On most GNU Linux systems, we reach for GCC when compiling C.
              Although people still call it the GNU C Compiler, it is actually
              the GNU Compiler Collection. That naming shift is important, and
              we will come back to it.
            </p>
            <p>
              Imagine a tiny C program that prints a message. On Windows, it
              prints one string. On Linux, it prints another. We run:
            </p>
            <pre>
              <code>gcc main.c -o hello</code>
            </pre>
            <p>
              From our perspective: compile, run, done. Under the hood, GCC runs
              a pipeline with four big phases. Each phase is a tool with a job,
              and each job produces an output that the next tool consumes.
            </p>
          </section>

          <section>
            <h3>Phase 1 - Preprocessing</h3>
            <p>
              The preprocessor cleans and prepares C code before actual
              compilation. It removes comments, expands macros, and resolves
              conditional compilation with directives like <code>#ifdef</code>.
              Most importantly, it resolves <code>#include</code> lines by
              literally inserting the contents of header files into your source.
              The output is still C code, just expanded and ready for the next
              step.
            </p>
            <p>
              Picture it like getting all the ingredients on the counter before
              cooking. You are not eating yet, but everything is chopped and
              ready to be turned into something hot and tasty.
            </p>
          </section>

          <section>
            <h3>Phase 2 - Compilation To Assembly</h3>
            <p>
              The compiler translates preprocessed C into assembly language.
              This is not machine code yet. Assembly is human readable, written
              in mnemonics like <code>mov</code>, <code>add</code>, and{" "}
              <code>call</code>. It represents real CPU instructions and how the
              program will run.
            </p>
            <p>
              Myth busted: compilers do not always go straight to machine code.
              Many produce an intermediate representation like assembly so
              developers can inspect the output and reason about performance and
              correctness.
            </p>
          </section>

          <section>
            <h3>Phase 3 - Assembling To Object Files</h3>
            <p>
              The assembler translates assembly into machine code, producing an
              object file, typically with a <code>.o</code> extension. This file
              contains machine instructions and symbol tables, but it is not a
              runnable program yet. Think of an object file as a part of a
              puzzle that still needs to be snapped together.
            </p>
          </section>

          <section>
            <h3>Phase 4 - Linking Into An Executable</h3>
            <p>
              The linker takes one or more object files and stitches them into a
              single executable. It resolves where each function and global
              lives in memory, hooks up calls to the right addresses, and pulls
              in code from libraries that your program depends on, like the C
              standard library function <code>printf</code>.
            </p>
            <p>
              Here is the twist that matters for multi-language projects: the
              linker can combine object files produced by different compilers,
              and it can pull code from both static and dynamic libraries. This
              is the secret sauce that lets a C file call a Rust function or a
              Fortran routine, as long as they agree on how to talk.
            </p>
          </section>

          <section>
            <h3>Static Linking vs Dynamic Linking - What Actually Happens</h3>
            <p>
              With static linking, the linker copies the machine code for any
              needed library functions straight into your final executable. It
              is self contained. No dependencies to search for at runtime.
            </p>
            <p>
              With dynamic linking, libraries live in separate shared objects
              loaded at runtime. On Unix-like systems they are <code>.so</code>{" "}
              files. On Windows they are <code>.dll</code> files. These files
              contain executable code but no entry point like <code>main</code>.
              Your program references them, and the operating system loader maps
              them into memory when needed.
            </p>
            <p>Why dynamic linking is so popular:</p>
            <ul>
              <li>
                Saves disk space and memory - thousands of programs can share
                one copy of libc or OpenSSL.
              </li>
              <li>
                Updates are easier - patch one library and every program that
                uses it benefits without recompilation.
              </li>
              <li>
                On-demand loading - only load what is needed when it is needed.
              </li>
            </ul>
            <p>
              In practice, this looks like your final binary containing
              references to symbols that live in shared libraries. At runtime,
              the loader resolves those symbols and maps the code into your
              process. To a developer, it feels like everything is bundled, but
              under the hood, the OS is doing smart work.
            </p>
            <p>
              Want to go deeper into linking later? We could write a full piece
              on PLT and GOT, symbol resolution, versioned symbols, and how the
              dynamic loader searches for libraries. If you want that, drop a
              comment.
            </p>
          </section>
        </section>

        <section>
          <h2>Peeking Behind The Curtain With GCC Flags</h2>
          <p>
            Compilers often hide intermediate files by default. But they do not
            have to. With GCC, you can ask to keep them and even stop the
            process at a specific stage:
          </p>
          <ul>
            <li>
              Keep temps:
              <pre>
                <code>gcc -save-temps main.c -o main</code>
              </pre>
            </li>
            <li>
              Stop after generating assembly:
              <pre>
                <code>gcc -S main.c</code>
              </pre>
            </li>
            <li>
              Compile only to object:
              <pre>
                <code>gcc -c main.c</code>
              </pre>
            </li>
          </ul>
          <p>
            This is great for learning and for performance work. When you are
            tuning hot paths, you can inspect the assembly and verify the
            compiler produced the instructions you expect. I once had a hot loop
            that ran millions of times per second. Looking at the assembly
            showed an unexpected bounds check. One tiny refactor moved the check
            out of the loop and the function went from sluggish to snappy.
          </p>
          <p>
            You can also start the pipeline from the middle. If you hand write
            an assembly routine, pass it to GCC to assemble and link with your C
            code. GCC is not just one program - it is a toolkit that plays nice
            with building blocks.
          </p>
        </section>

        <section>
          <h2>Real Example - Mixing C And Assembly For Speed</h2>
          <p>
            Suppose you need to count prime numbers between 0 and N and you want
            it fast. You could write it all in C. But maybe for the hottest
            inner loop, you do not trust the auto vectorization you are getting
            today. So you write a hand-tuned assembly routine for the sieve or
            the primality check and call it from C.
          </p>
          <p>The flow looks like this:</p>
          <ul>
            <li>
              Write the core math function in assembly for your CPU target.
            </li>
            <li>Write the rest in C - parsing, timing, printing.</li>
            <li>
              Assemble the assembly file to an object file, compile the C file
              to an object, then link both into one executable.
            </li>
          </ul>
          <p>
            That is exactly how many serious codebases work. The Linux kernel,
            FFmpeg, OpenSSL, and many embedded projects use a similar approach.
            Most logic is in C. When absolute speed matters, they drop to
            assembly for specific routines like crypto primitives or pixel
            operations.
          </p>
          <p>
            Story time: the first time I swapped a C block for an assembly
            routine, I expected 2x. I got 15 percent. Not great. The win only
            came after I profiled, fixed cache misses, and aligned data for the
            CPU prefetcher. The lesson stuck - write the simple version first,
            measure, then pick your battles.
          </p>
        </section>

        <section>
          <h2>GCC Is A Toolchain, Not Just A C Compiler</h2>
          <p>
            This is why the name changed. GCC started life as the GNU C
            Compiler. It grew into the GNU Compiler Collection that supports C,
            C++, Objective-C, Fortran, Ada, D, and more, depending on
            configuration. Each language frontend feeds into a pipeline of
            tools. Parts of that pipeline are pluggable, which is exactly why
            you can stitch in your own assembly files or link in object files
            built by other compilers entirely.
          </p>
        </section>

        <section>
          <h2>Mixing High-Level Languages Too - C And Fortran</h2>
          <p>
            Assembly is already inside the C pipeline, so using it feels like a
            cheat code. What about mixing C with a different high-level
            language, like Fortran? Totally possible and common in math heavy
            code.
          </p>
          <p>The flow is usually:</p>
          <ul>
            <li>
              Compile Fortran files with a Fortran compiler to object files.
            </li>
            <li>Compile C files with GCC or Clang to object files.</li>
            <li>
              Link all object files together, plus any runtime libraries that
              Fortran needs.
            </li>
          </ul>
          <p>
            That last bit matters. Some languages have a runtime with support
            code that must be linked in. If you forget it, the linker will
            complain about missing symbols. Once you know the moving pieces, the
            process is smooth.
          </p>
          <p>
            Example scenario: you inherit a finance model written in Fortran
            that traders have trusted for years. You want a modern C API in
            front of it for integration with services. You do not rewrite the
            math - you keep the Fortran core, build a thin C layer, and link
            them together. Now you get stability and a cleaner interface.
          </p>
        </section>

        <section>
          <h2>Rust And C - Calling Across The FFI Boundary</h2>
          <p>
            Rust has its own toolchain and build system. Different compiler,
            different philosophy. But when it comes time to produce a final
            binary, Rust relies on a linker too. That means C and Rust can talk
            to each other as long as they agree on how to talk.
          </p>

          <section>
            <h3>Calling A Rust Function From C</h3>
            <ol>
              <li>
                Write a Rust function with C ABI. In Rust you mark it with{" "}
                <code>#[no_mangle]</code> and <code>extern "C"</code> so the
                name is predictable and the calling convention matches C.
              </li>
              <li>
                Build a static or dynamic library from your Rust crate. In{" "}
                <code>Cargo.toml</code>, set{" "}
                <code>crate-type = ["staticlib", "cdylib"]</code> depending on
                your needs.
              </li>
              <li>
                Declare the function in C with <code>extern</code> and link
                against the Rust built library.
              </li>
            </ol>
            <p>Minimal example of the Rust side:</p>
            <pre>
              <code>{`// src/lib.rs
#[no_mangle]
pub extern "C" fn add_fast(a: i32, b: i32) -> i32 {
    a + b
}`}</code>
            </pre>
            <p>And the C side:</p>
            <pre>
              <code>{`// main.c
#include <stdio.h>

extern int add_fast(int a, int b);

int main(void) {
    printf("%d\\n", add_fast(40, 2));
    return 0;
}`}</code>
            </pre>
            <p>
              Build the Rust library with Cargo, compile the C file, and link
              with the Rust output. Now C calls Rust. Simple and strong.
            </p>
          </section>

          <section>
            <h3>Calling C From Rust</h3>
            <p>
              This is even more common since so many system APIs and libraries
              are written in C. In Rust, you declare external functions inside
              an <code>extern "C"</code> block, and you can bind to headers with
              tools like bindgen. The same ABI rules apply.
            </p>
          </section>

          <section>
            <h3>Where This Matters Day To Day</h3>
            <ul>
              <li>
                Graphics: Rust game loops calling C-based OpenGL or Vulkan
                loaders.
              </li>
              <li>
                Crypto: Rust apps using C libraries like OpenSSL or BoringSSL
                for FIPS compliance.
              </li>
              <li>
                OS APIs: Rust services calling POSIX or Win32 functions exposed
                in C headers.
              </li>
            </ul>
          </section>
        </section>

        <section>
          <h2>Why Mix Languages At All? Performance And Leverage</h2>
          <p>
            You rarely need every part of a system to be blazing fast. Usually,
            80-90 percent of the runtime sits in a small set of functions. So
            teams write most of the project in a language that makes them fast
            at building features, then write the hot code in a lower level
            language like C or hand-tuned assembly.
          </p>
          <p>
            Another big reason is leverage. Mature C libraries exist for almost
            everything - graphics, networking, compression, crypto. Tapping into
            that saves months of work. Mixing languages lets you keep your
            modern language of choice while still using proven building blocks.
          </p>
        </section>

        <section>
          <h2>Critical Detail - ABIs And Calling Conventions</h2>
          <p>
            Here is the catch most newcomers miss. Even if two compilers target
            the same CPU and both produce valid machine code, they can disagree
            on how data is passed to functions and how results are returned. If
            they do not agree, you get garbage results or crashes.
          </p>

          <section>
            <h3>What An ABI Actually Defines</h3>
            <p>
              ABI stands for Application Binary Interface. If an API is the set
              of functions and data types you call at the source level, the ABI
              is the contract at the binary level. It covers:
            </p>
            <ul>
              <li>Which registers carry which arguments.</li>
              <li>When arguments go on the stack and in what order.</li>
              <li>Where the return value lives.</li>
              <li>How the stack pointer is aligned.</li>
              <li>How names are mangled for the symbol table.</li>
              <li>
                How exceptions and unwinding should be handled, if applicable.
              </li>
            </ul>
            <p>
              If two sides disagree on any of these, you can pass in a pointer
              and the callee treats it like a number, or you return a value in
              the wrong register and the caller reads from an empty one.
            </p>
          </section>

          <section>
            <h3>Concrete Mismatch Example - Registers And Values</h3>
            <p>
              Imagine Language A puts two integer arguments in registers 0 and
              1, but Language B expects them in registers 1 and 2. Language A
              calls the function. Language B reads the wrong registers. Your
              math runs on junk. Then the function returns its result in
              register 1, but the caller reads from register 0. Now you have
              wrong input and a lost result.
            </p>
            <p>
              Another twist: Language X passes by reference and places addresses
              in registers. Language Y passes by value and expects numbers. Y
              will happily add two memory addresses together. That is not what
              you wanted. It can even crash if those addresses are not readable
              or are misaligned for the read it tries to do.
            </p>
          </section>

          <section>
            <h3>How We Fix It - Make One Side Conform</h3>
            <p>
              The solution is to make at least one side speak the other side’s
              ABI. That is exactly what keywords and attributes like{" "}
              <code>extern</code> and <code>no_mangle</code> are for. They tell
              the compiler to generate assembly with specific calling
              conventions and symbol names.
            </p>
            <ul>
              <li>
                C: declare foreign functions with <code>extern</code> and match
                the signature.
              </li>
              <li>
                Rust: use <code>extern "C"</code> so the ABI matches C and add{" "}
                <code>#[no_mangle]</code> so the symbol name is not changed.
              </li>
              <li>
                Fortran: use the <code>BIND(C)</code> attribute to match the C
                ABI and predictable naming.
              </li>
              <li>
                Go: use cgo with a special comment block above{" "}
                <code>import "C"</code> to include headers and bind to C code.
              </li>
            </ul>
            <p>
              After that, the linker can do its job safely because both sides
              agree on the binary level contract.
            </p>
          </section>
        </section>

        <section>
          <h2>Seeing The Pipeline Yourself - A Simple Hands-On Flow</h2>
          <p>If you want to actually see this, try this mini project:</p>
          <ol>
            <li>
              Write a C file that declares an external function{" "}
              <code>extern int add_fast(int, int);</code> and calls it.
            </li>
            <li>
              Write the same function in assembly for your platform or in Rust
              using <code>extern "C"</code> and <code>#[no_mangle]</code>.
            </li>
            <li>
              Build each to object files. Use <code>-S</code> to generate
              assembly and look at the calling code. Confirm which registers
              carry args and where the return value goes.
            </li>
            <li>
              Link the objects and run the program. Then change the calling
              convention intentionally and watch it break. It is one of the best
              ways to truly understand ABIs.
            </li>
          </ol>
          <p>
            On Linux, you can also use <code>objdump -d</code> and{" "}
            <code>readelf -Ws</code> to inspect symbols and assembly. On macOS,
            there is <code>otool -tv</code>. On Windows, try{" "}
            <code>dumpbin /symbols</code>.
          </p>
        </section>

        <section>
          <h2>Common Pitfalls When Mixing Languages</h2>
          <ul>
            <li>
              Name mangling: C++ mangles names by default. Use{" "}
              <code>extern "C"</code> on exported functions to keep predictable
              names.
            </li>
            <li>
              Struct layout: Different compilers or flags can pack structs
              differently. Use fixed-width types and alignment attributes when
              sharing data across languages.
            </li>
            <li>
              Calling convention attributes: On Windows, pay attention to{" "}
              <code>__stdcall</code>, <code>__cdecl</code>, and friends when
              binding to system APIs.
            </li>
            <li>
              Runtime dependencies: Languages like Fortran or Go may require
              extra runtime libraries. Make sure they are linked or present at
              runtime.
            </li>
            <li>
              Error handling: Exceptions do not cross language boundaries
              safely. Prefer error codes or result structs when crossing the
              FFI.
            </li>
          </ul>
        </section>

        <aside aria-label="Related reading">
          <h2>Related topics to explore next</h2>
          <ul>
            <li>
              <Link href="/latest/rust-programming-language">
                Rust Programming Language
              </Link>
            </li>
            <li>
              <Link href="/latest/full-stack-developer-roadmap">
                Full Stack Developer Roadmap
              </Link>
            </li>
            <li>
              <Link href="/latest/top-languages-for-ai-2025">
                Best Programming Language
              </Link>
            </li>
            <li>
              <Link href="/latest/list-of-free-apis">
                Free APIs You Can Use In Your Next Programming Project
              </Link>
            </li>
          </ul>
        </aside>

        <section>
          <h2>
            Key Takeaways - How Different Languages Live In One Executable
          </h2>
          <ul>
            <li>
              Compilers are pipelines. Preprocess, compile to assembly, assemble
              to object files, then link.
            </li>
            <li>
              The linker is the meeting point. It stitches object files and
              libraries together, no matter which frontend produced them.
            </li>
            <li>
              Static linking copies code into your binary. Dynamic linking
              defers code loading to runtime and saves space.
            </li>
            <li>
              Mixing languages works only if both sides agree on the ABI and
              calling convention. Use language-specific keywords to make them
              match.
            </li>
            <li>
              Real projects do this all the time - from the Linux kernel to
              FFmpeg to Rust apps calling C libraries.
            </li>
          </ul>
          <p>
            We have covered compiled language interop today. In the next part,
            we will cover how compiled languages mix with interpreted ones.
            Subscribe so you do not miss it. And big thanks again to Let’s Get
            Rusty for supporting this work. If this helped you, a quick like
            goes a long way.
          </p>
        </section>
      </article>
    </div>
  );
}
