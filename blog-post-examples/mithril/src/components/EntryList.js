
window.EntryList = {}

EntryList.view = function () {
  return m('.entry-list', [
    m('h1', "All Entries"),
    m('h2', "Hello dude"),
    m('a[href=/entries/new]', { config: m.route }, "Add New Entry"),
    m('br'),
    // new!
    m('a[href=/example]', { config: m.route }, "example"),
    // index.html created all the data by calling the Entry.create as referenced
    // in the Entry.js, which is the "model"
    Entry.all().map( entryView )
  ])
}

//no controller implemented here as it is optional if it is a stateless Mithril component you're making

function entryView (entry) {
  var date = new Date(entry.enteredAt)

  return m('.entry', [
    m('label', "Entered at: ", date.toString()),
    m('ul', entry.volunteers.map(volunteerView) )
  ])
}

function volunteerView (volunteer) {
  return m('li.volunteer', [
    m('label', volunteer.name),
    m('label', "(" + volunteer.email + ")")
  ])
}
