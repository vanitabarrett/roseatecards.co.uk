import Head from 'next/head';

export default function FileTransfer() {
  return (
    <div className="gel-wrap file-transfer gel-2/3@l">
      <Head>
        <title>File Transfer Instructions - Roseate Cards</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="page-title">File Transfer Instructions</h1>

      <p>You might be seeing this page because you've purchased a wedding photobook from Roseate Cards.</p>
      <p>In order for us to begin working on your photobook, we need you to send us your wedding photographs. Send as many as you like - we will choose the best (plus any specific photos you ask us to use).</p>

      <h2>Instructions</h2>

      <ol>
        <li>Open our <a href="https://fromsmash.com/">file transfer website</a> in your browser and upload your files</li>
        <li>
          Once your files are uploaded, a form should appear for you to complete. Complete the form with the following details:
          <ul>
            <li><span className="file-transfer__bold">From:</span> [your email address]</li>
            <li><span className="file-transfer__bold">To:</span> hello@roseatecards.co.uk</li>
            <li><span className="file-transfer__bold">Subject:</span> Wedding Photobook: [your names]</li>
            <li><span className="file-transfer__bold">Body:</span> Feel free to leave this blank, or write any special requests here</li>
          </ul>
        </li>
        <li>Press 'Send'</li>
        <li>That's it! Once we have received your files, we will get to work on your photobook and let you know when it's on the way.</li>
      </ol>
    </div>
  );
}
