import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Creating an HTML Table for Weekly Schedules | HTML Tutorial",
  description:
    "Learn to build a weekly schedule using HTML tables in this beginner-friendly tutorial. This step-by-step guide helps you structure data with HTML tables to create a weekly schedule layout, perfect for beginners honing their HTML skills.",
  keywords: [
    "HTML tutorial",
    "HTML table",
    "weekly schedule HTML",
    "HTML beginner project",
    "HTML schedule example",
    "web development",
    "HTML basics",
    "HTML  beginner projects",
    "HTML projects",
    "HTML table   projects",
    "HTML table beginner projects",
    "HTML table tutorial",
    "HTML table example",
    "HTML table layout",
    "HTML table structure",
  ],
  alternates: {
    canonical: "https://www.mergesociety.com/projects/htmlP/3p",
  },

  openGraph: {
    title: "Creating an HTML Table for Weekly Schedules",
    description:
      "A beginner's guide to creating a weekly schedule using HTML tables. Perfect for learning how to structure data with HTML.",
  },
};

const WeeklyScheduleHtml = () => {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
      className="lesson-container"
    >
      <h1
        style={{
          color: "#333",
          borderBottom: "2px solid #333",
          paddingBottom: "10px",
        }}
      >
        Creating an HTML Table for Weekly Schedules
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497470/skedule_le1iyh.jpg"
        }
        alt={"HTML Resume Tutorial"}
        width={600}
        height={400}
        className="project-image"
        priority
      />
      <h3 className="project-info">
        <Image
          src={
            "https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
          }
          alt={"Personal Website Example"}
          width={600}
          height={400}
          className="founders-image"
          priority
        />
        <span className="project-title">
          <Link href={"/about"}>Written by Massa Medi</Link>
        </span>
        <time className="project-date" dateTime="2025-01-14">
          | January 14, 2025
        </time>
      </h3>

      <div>
        <div>
          <p>
            In this tutorial, we'll guide you through creating a weekly schedule
            using HTML tables. This project is perfect for beginners who want to
            practice their{" "}
            <Link href="/html" passHref>
              HTML
            </Link>{" "}
            skills and learn how to structure data using tables.
          </p>
        </div>

        <div>
          <h4>What You'll Build:</h4>
          <p>
            By the end of this tutorial, you'll have created a schedule that
            includes:
          </p>
          <ul>
            <li>Days of the week as column headers</li>
            <li>Time slots as row headers</li>
            <li>Cells for activities or classes</li>
          </ul>
        </div>

        <div>
          <p>✨ Getting Started:</p>
          <p>
            Before we begin, make sure you have a basic understanding of HTML
            tags and a text editor installed on your computer. If you're new to
            HTML, don't worry - we'll explain everything step by step!
          </p>
        </div>
      </div>

      <h2>Setting Up Your Workspace</h2>
      <h3>Creating Your Project Folder</h3>

      <div>
        <div>
          <p>
            First, let's set up a workspace for your weekly schedule project:
          </p>
        </div>

        <div>
          <h4>Step 1: Create Your Project Folder</h4>
          <div>
            <p>
              Think of this folder as a special drawer just for your schedule
              files:
            </p>

            <div>
              <p>👉 If you're using Windows:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Move your mouse to "New"</li>
                <li>Click "Folder"</li>
                <li>Name it "my-weekly-schedule"</li>
              </ol>

              <p>👉 If you're using Mac:</p>
              <ol>
                <li>Right-click on your desktop</li>
                <li>Click "New Folder"</li>
                <li>Name it "my-weekly-schedule"</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h4>Step 2: Open the Folder in a Text Editor</h4>
          <div>
            <p>
              A text editor is like your digital pencil and paper. We recommend
              Visual Studio Code (VS Code) because it's:
            </p>
            <ul>
              <li>Free to download</li>
              <li>Easy to use</li>
              <li>Helps you write code better with helpful hints</li>
            </ul>
            <div>
              <p>🔍 How to get VS Code:</p>
              <ol>
                <li>Go to "code.visualstudio.com"</li>
                <li>Click the big download button</li>
                <li>Install it just like any other program</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h4>Step 3: Create Your First HTML File</h4>
          <div>
            <p>Now let's create your schedule's main file:</p>
            <ol>
              <li>Open VS Code</li>
              <li>Click "File" → "Open Folder"</li>
              <li>Find and select your "my-weekly-schedule" folder</li>
              <li>
                Click "New File" (or press Ctrl+N on Windows, Cmd+N on Mac)
              </li>
              <li>
                Save it as "index.html" (this is always the main page of a
                website)
              </li>
            </ol>
          </div>
        </div>

        <div>
          <p>🎉 Congratulations!</p>
          <p>
            You've just set up your web development workspace! Think of it as
            having your artist's studio ready - now we can start creating! In
            the next step, we'll start writing the basic HTML structure for your
            weekly schedule.
          </p>
        </div>
      </div>

      <h2>Creating the Basic HTML Structure</h2>
      <h3>Setting Up the HTML Document</h3>

      <div>
        <div>
          <p>
            Let's start by creating the basic structure of our HTML document.
            This will serve as the foundation for our weekly schedule.
          </p>
        </div>

        <div>
          <h4>Step 1: Adding the Document Type Declaration</h4>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This line tells the browser that this document is written in HTML5.
          </p>
        </div>

        <div>
          <h4>Step 2: Adding the HTML Tag</h4>
          <p>Next, add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<html lang="en">`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This line starts your HTML document and specifies that the language
            is English.
          </p>
        </div>

        <div>
          <h4>Step 3: Adding the Head Section</h4>
          <p>Now, add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Weekly Schedule</title>
</head>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's understand each line:</p>
          <ul>
            <li>
              <code>&lt;head&gt;</code> contains meta information about the
              document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code> sets the character
              encoding to UTF-8, supporting various languages.
            </li>
            <li>
              <code>
                &lt;meta name="viewport" content="width=device-width,
                initial-scale=1.0"&gt;
              </code>{" "}
              ensures that the schedule looks good on different devices and
              screen sizes.
            </li>
            <li>
              <code>&lt;title&gt;</code> sets the title of the webpage, which
              appears in the browser tab.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 4: Adding the Body Section</h4>
          <p>Finally, add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<body>
  <h1>My Weekly Schedule</h1>
  <!-- We'll add our table here -->
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>What are these for?</p>
          <ul>
            <li>
              <code>&lt;body&gt;</code> is where all the visible content goes
              (like text and images).
            </li>
            <li>
              <code>&lt;/html&gt;</code> closes your HTML document.
            </li>
            <li>
              <code>&lt;h1&gt;</code> is the main heading for your page, like
              the title of a chapter in a book.
            </li>
          </ul>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>
              Make sure you have added all the code provide above in your HTML
              file you created
            </li>
            <li>Save the file (Ctrl+S on Windows, Cmd+S on Mac)</li>
            <li>Find your file in your folder and double-click it</li>
            <li>It should open in your web browser!</li>
          </ol>
          <p>
            Right now you'll see the title "My Weekly Schedule" displayed on the
            page. In the next step, we'll start building our schedule table.
          </p>
        </div>
      </div>

      <h2>Building the Basic Table Structure</h2>
      <h3>Creating the Table for Your Weekly Schedule</h3>

      <div>
        <div>
          <p>
            Now that we have our basic HTML structure, let's create the table
            for our weekly schedule. We'll start with a simple structure and
            build upon it.
          </p>
        </div>

        <div>
          <h4>Step 1: Adding the Table Tag</h4>
          <p>
            Add the following code inside the <code>&lt;body&gt;</code> tag,
            just below the <code>&lt;h1&gt;</code> element:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<table border="1">`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This creates a table with a visible border. The <code>border</code>{" "}
            attribute is like drawing a line around each cell to make it easier
            to see. In modern web development, we typically use CSS for styling,
            but this is useful for demonstration.
          </p>
        </div>

        <div>
          <h4>Step 2: Adding the Table Head (Thead)</h4>
          <p>
            Inside the <code>&lt;table&gt;</code> tag, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<thead>
  <tr>
    <th></th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
  </tr>
</thead>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;thead&gt;</code> contains the header content of the
              table, like the header of a spreadsheet.
            </li>
            <li>
              <code>&lt;tr&gt;</code> stands for "table row". It defines a row
              in the table, like a row in a spreadsheet.
            </li>
            <li>
              <code>&lt;th&gt;</code> stands for "table header". It's used for
              header cells, like the column headers in a spreadsheet.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 3: Adding the Table Body (Tbody)</h4>
          <p>
            Below the <code>&lt;/thead&gt;</code> tag, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tbody>
  <!-- We'll add time slots and activities here -->
</tbody>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new part:</p>
          <ul>
            <li>
              <code>&lt;tbody&gt;</code> will contain the main content of the
              table, like the body of a spreadsheet.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 4: Closing the Table Tag</h4>
          <p>Finally, add the closing table tag:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`</table>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a table with days of the week as column headers.
          </p>
          <p>
            In the next step, we'll add time slots and activities to complete
            our weekly schedule.
          </p>
        </div>
      </div>

      <h2>Adding Time Slots and Activities</h2>
      <h3>Filling in the Schedule Details</h3>

      <div>
        <div>
          <p>
            Now that we have our basic table structure, let's add time slots and
            some sample activities to create a full weekly schedule.
          </p>
        </div>

        <div>
          <h4>Step 1: Adding the First Time Slot</h4>
          <p>
            Inside the <code>&lt;tbody&gt;</code> tag, add the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tr>
  <th>9:00 AM</th>
  <td>Math</td>
  <td>Science</td>
  <td>English</td>
  <td>History</td>
  <td>Art</td>
</tr>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>&lt;tr&gt;</code> represents a row in our schedule,
              corresponding to a specific time slot.
            </li>
            <li>
              <code>&lt;th&gt;</code> shows the time slot. It's like the label
              for each row in a spreadsheet.
            </li>
            <li>
              <code>&lt;td&gt;</code> (table data) cells represent activities or
              classes for that time slot on a specific day.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Adding More Time Slots</h4>
          <p>
            Below the first <code>&lt;tr&gt;</code>, add the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tr>
  <th>10:00 AM</th>
  <td>Physics</td>
  <td>Chemistry</td>
  <td>Biology</td>
  <td>Geography</td>
  <td>Music</td>
</tr>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>
            This adds another row for the 10:00 AM time slot with different
            activities.
          </p>
        </div>

        <div>
          <h4>Step 3: Adding Break and Lunch Time</h4>
          <p>
            Continue adding more time slots and activities. For the break and
            lunch time, add:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tr>
  <th>11:00 AM</th>
  <td>Break</td>
  <td>Break</td>
  <td>Break</td>
  <td>Break</td>
  <td>Break</td>
</tr>
<tr>
  <th>12:00 PM</th>
  <td colspan="5">Lunch Break</td>
</tr>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new parts:</p>
          <ul>
            <li>
              <code>colspan="5"</code> makes the lunch break cell span across
              all five weekdays, creating a unified lunch break row.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 4: Adding Afternoon Classes</h4>
          <p>Finally, add the afternoon classes:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tr>
  <th>1:00 PM</th>
  <td>Computer Science</td>
  <td>Physical Education</td>
  <td>Literature</td>
  <td>Foreign Language</td>
  <td>Economics</td>
</tr>`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a complete weekly schedule with time slots and activities.
          </p>
          <p>
            In the final step, we'll add some finishing touches to make our
            schedule more informative and user-friendly.
          </p>
        </div>
      </div>

      <h2>Adding Finishing Touches</h2>
      <h3>Enhancing Your Weekly Schedule</h3>

      <div>
        <div>
          <p>
            To make our weekly schedule more informative and easier to read,
            let's add a few finishing touches. We'll add a caption to the table
            and use the <code>colspan</code>
            attribute to create a cell that spans multiple columns for lunch
            time.
          </p>
        </div>

        <div>
          <h4>Step 1: Adding a Caption</h4>
          <p>
            Add the following code right after the{" "}
            <code>&lt;table border="1"&gt;</code> tag:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<caption>My Class Schedule for Fall 2024</caption>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Understanding the new part:</p>
          <ul>
            <li>
              <code>&lt;caption&gt;</code> adds a title or explanation for the
              table, like a title for a book. It's typically displayed above the
              table.
            </li>
          </ul>
        </div>

        <div>
          <h4>Step 2: Final Table Structure</h4>
          <p>Now, your complete table structure should look like this:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Weekly Schedule</title>
</head>
<body>
  <h1>My Weekly Schedule</h1>               
          
<table border="1">
  <caption>My Class Schedule for Fall 2024</caption>
  <thead>
    <tr>
      <th></th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>9:00 AM</th>
      <td>Math</td>
      <td>Science</td>
      <td>English</td>
      <td>History</td>
      <td>Art</td>
    </tr>
    <tr>
      <th>10:00 AM</th>
      <td>Physics</td>
      <td>Chemistry</td>
      <td>Biology</td>
      <td>Geography</td>
      <td>Music</td>
    </tr>
    <tr>
      <th>11:00 AM</th>
      <td>Break</td>
      <td>Break</td>
      <td>Break</td>
      <td>Break</td>
      <td>Break</td>
    </tr>
    <tr>
      <th>12:00 PM</th>
      <td colspan="5">Lunch Break</td>
    </tr>
    <tr>
      <th>1:00 PM</th>
      <td>Computer Science</td>
      <td>Physical Education</td>
      <td>Literature</td>
      <td>Foreign Language</td>
      <td>Economics</td>
    </tr>
  </tbody>
</table>
</body>
</html>
`}
              </SyntaxHighlighter>
            </code>
          </pre>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a more polished weekly schedule with a caption and a unified
            lunch break row.
          </p>
          <h3>🎉 Congratulations!</h3>
          <p>
            You've successfully created an HTML table for a weekly schedule.
            This project has helped you practice:
          </p>
          <ul>
            <li>Creating the basic structure of an HTML document</li>
            <li>Using HTML tables to organize information</li>
            <li>
              Working with table headers (<code>&lt;th&gt;</code>) and data
              cells (<code>&lt;td&gt;</code>)
            </li>
            <li>
              Using the <code>colspan</code> attribute to span cells across
              columns
            </li>
            <li>Adding a caption to provide context for your table</li>
          </ul>
          <p>
            Feel free to customize this schedule further by adding your own
            classes, changing the time slots, or even adding weekend activities.
            Remember, practice makes perfect in web development!
          </p>
        </div>
      </div>
      <h3>Recommended</h3>
      <HtmlProjectssss />
    </article>
  );
};

export default WeeklyScheduleHtml;

export const HtmlProjectssss = () => {
  const htmlOnlyProjectTitles = [
    {
      id: "1p",
      title: "Create a Personal Profile Page Using HTML",
      description:
        "Learn how to build a simple personal profile page using only HTML. This project covers essential HTML elements like headings, paragraphs, lists, and links. Perfect for beginners who want to practice structuring web pages.",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736496972/resume_l9lnxg.jpg",
      alt: "Personal Profile Page Example",
      date: "January 15, 2025",
    },
    {
      id: "2p",
      title: "Build a Professional Resume with HTML",
      description:
        "Design a structured and professional resume using HTML. This project teaches you how to use tables, lists, and semantic HTML tags to represent work experience, skills, and education. Great for showcasing your HTML skills!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497289/portfolio_zv717y.jpg",
      alt: "HTML Resume Example",
      date: "January 17, 2025",
    },
    {
      id: "4p",
      title: "Design a Restaurant Menu Using Semantic HTML",
      description:
        "Create a restaurant menu using semantic HTML elements like sections, articles, and lists. This project focuses on organizing content with proper HTML structure and accessibility. Perfect for advanced learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736497900/restuarat_p5vq9d.jpg",
      alt: "Restaurant Menu Example",
      date: "january 17, 2025",
    },
    {
      id: "5p",
      title: "Build a Photo Gallery with HTML",
      description:
        "Learn how to create a static photo gallery using HTML image tags and captions. This project emphasizes the use of alt attributes for accessibility and proper image embedding. Great for practicing HTML media elements!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498269/website_otg5ab.jpg",
      alt: "Photo Gallery Example",
      date: "january 5, 2025",
    },
    {
      id: "6p",
      title: "Create an Event Invitation Page with HTML",
      description:
        "Design an event invitation page using only HTML. This project covers headings, paragraphs, lists, and hyperlinks to create a visually appealing and functional page. Perfect for advanced HTML learners!",
      image:
        "https://res.cloudinary.com/dhgjhspsp/image/upload/v1736498445/event_iu3yfu.jpg",
      alt: "Event Invitation Example",
      date: "February 12, 2025",
    },
  ];

  return (
    <div className="blog-posts-container">
      <div className="posts-grid">
        {htmlOnlyProjectTitles.map((project) => (
          <Link
            key={project.id}
            href={`/projects/htmlP/${project.id}`}
            passHref
            className="post-description"
          >
            <div className="post-card">
              <div className="post-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="project-image"
                  priority
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{project.title}</h2>
                <p className="post-date">{project.date}</p>
                <p className="post-description">{project.description}</p>
                <button className="post-button ct-button">
                  Start Tutorial
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
