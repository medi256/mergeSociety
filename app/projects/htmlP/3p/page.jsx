import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  ],

  openGraph: {
    title: "Creating an HTML Table for Weekly Schedules",
    description:
      "A beginner's guide to creating a weekly schedule using HTML tables. Perfect for learning how to structure data with HTML.",
  },
};

const WeeklyScheduleHtml = () => {
  return (
    <div className="lesson-container">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
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
      </div>

      <h2>Introduction to HTML Tables for Weekly Schedules </h2>
      <h3>Welcome to the HTML Weekly Schedule Tutorial</h3>

      <div>
        <div>
          <p>
            In this tutorial, we'll guide you through creating a weekly schedule
            using HTML tables. This project is perfect for beginners who want to
            practice their HTML skills and learn how to structure data using
            tables.
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
          <h4>The Basic Structure</h4>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Weekly Schedule</title>
</head>
<body>
  <h1>My Weekly Schedule</h1>
  <!-- We'll add our table here -->
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Let's break this down - piece by piece:</h5>

            <div>
              <div>
                <p>{`1. <!DOCTYPE html>`}</p>
                <p>
                  This is like a note at the top of a letter, telling the
                  browser that this document is written in HTML5.
                </p>
              </div>

              <div>
                <p>{`2. <html lang="en">`}</p>
                <p>
                  This is the root tag, like the cover of a book. The{" "}
                  <code>lang="en"</code> attribute tells the browser that the
                  content is in English.
                </p>
              </div>

              <div>
                <p>{`3. <head>`}</p>
                <p>
                  This section is like the back cover of a book, where you put
                  information about the document itself, like the title and
                  character encoding.
                </p>
              </div>

              <div>
                <p>{`4. <meta charset="UTF-8">`}</p>
                <p>
                  This tag sets the character encoding to UTF-8, which is like a
                  language that the browser uses to understand all the
                  characters in your document.
                </p>
              </div>

              <div>
                <p>{`5. <meta name="viewport" ...>`}</p>
                <p>
                  This tag ensures that your webpage looks good on different
                  devices, like a map that adjusts to fit your screen size.
                </p>
              </div>

              <div>
                <p>{`6. <title>`}</p>
                <p>
                  This tag sets the title of the webpage, which appears in the
                  browser tab, like the title of a book on a shelf.
                </p>
              </div>

              <div>
                <p>{`7. <body>`}</p>
                <p>
                  This is where you put all the visible content of your webpage,
                  like the pages inside a book.
                </p>
              </div>

              <div>
                <p>{`8. <h1>`}</p>
                <p>
                  This is the main heading for your page, like the title of a
                  chapter in a book.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>👉 Try It Out!</h4>
          <ol>
            <li>Copy the code above into your "index.html" file</li>
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

      <h2>Creating the Basic HTML Structure</h2>
      <h3>Building the Basic Table Structure</h3>

      <div>
        <div>
          <p>
            Now that we have our basic HTML structure, let's create the table
            for our weekly schedule. We'll start with a simple structure and
            build upon it.
          </p>
        </div>

        <div>
          <h4>Adding the Table Structure</h4>
          <p>
            Add the following code inside the <code>&lt;body&gt;</code> tag,
            just below the <code>&lt;h1&gt;</code> element:
          </p>

          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<table border="1">
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
    <!-- We'll add time slots and activities here -->
  </tbody>
</table>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Let's break this down - piece by piece:</h5>

            <div>
              <div>
                <p>{`1. <table border="1">`}</p>
                <p>
                  This creates a table with a visible border. The{" "}
                  <code>border</code> attribute is like drawing a line around
                  each cell to make it easier to see. In modern web development,
                  we typically use CSS for styling, but this is useful for
                  demonstration.
                </p>
              </div>

              <div>
                <p>{`2. <thead>`}</p>
                <p>
                  This section contains the header content of the table, like
                  the header of a spreadsheet.
                </p>
              </div>

              <div>
                <p>{`3. <tr>`}</p>
                <p>
                  This stands for "table row". It defines a row in the table,
                  like a row in a spreadsheet.
                </p>
              </div>

              <div>
                <p>{`4. <th>`}</p>
                <p>
                  This stands for "table header". It's used for header cells,
                  like the column headers in a spreadsheet.
                </p>
              </div>

              <div>
                <p>{`5. <tbody>`}</p>
                <p>
                  This section will contain the main content of the table, like
                  the body of a spreadsheet.
                </p>
              </div>
            </div>
          </div>
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
          <h4>Adding Time Slots and Activities</h4>
          <p>
            Replace the <code>&lt;tbody&gt;</code> section of your table with
            the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tbody>
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
    <td>Lunch</td>
    <td>Lunch</td>
    <td>Lunch</td>
    <td>Lunch</td>
    <td>Lunch</td>
  </tr>
  <tr>
    <th>1:00 PM</th>
    <td>Computer Science</td>
    <td>Physical Education</td>
    <td>Literature</td>
    <td>Foreign Language</td>
    <td>Economics</td>
  </tr>
</tbody>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Let's understand the structure we've added:</h5>

            <div>
              <div>
                <p>{`1. <tr>`}</p>
                <p>
                  Each <code>&lt;tr&gt;</code> represents a row in our schedule,
                  corresponding to a specific time slot. Think of it as a row in
                  a spreadsheet.
                </p>
              </div>

              <div>
                <p>{`2. <th>`}</p>
                <p>
                  The first <code>&lt;th&gt;</code> in each row shows the time
                  slot. It's like the label for each row in a spreadsheet.
                </p>
              </div>

              <div>
                <p>{`3. <td>`}</p>
                <p>
                  Each <code>&lt;td&gt;</code> (table data) cell represents an
                  activity or class for that time slot on a specific day. Think
                  of it as a cell in a spreadsheet where you write down your
                  activities.
                </p>
              </div>
            </div>
          </div>
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

      <h2> Adding Finishing Touches</h2>
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
          <h4>Adding a Caption and Lunch Break</h4>
          <p>Update your table code as follows:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<table border="1">
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
</table>`}
              </SyntaxHighlighter>
            </code>
          </pre>

          <div>
            <h5>Let's break down the new elements we've added:</h5>

            <div>
              <div>
                <p>{`1. <caption>`}</p>
                <p>
                  This tag adds a title or explanation for the table, like a
                  title for a book. It's typically displayed above the table.
                </p>
              </div>

              <div>
                <p>2. colspan="5"</p>
                <p>
                  This attribute makes the lunch break cell span across all five
                  weekdays, creating a unified lunch break row. It's like
                  merging cells in a spreadsheet to create a larger cell.
                </p>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default WeeklyScheduleHtml;
