chrome.runtime.onConect.addListener(function() {
  chrome.storage.local.get(['utag_data.page_breadcrumb'], function(result) {
    console.log('Value currently is ' + result.key);
  });
  //   chrome.storage.local.get({ color: '#3aa757' }, function() {
  //     console.log('The color is green.');
});
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: 'developer.chrome.com' },
//           }),
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()],
//       },
//     ]);
//   });
// });
