export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf95fbdc69cfff6040de08',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2hn7ymya',
                  apiId: 'dd4d6f67-da91-42db-9f23-2ced65bb03df'
                },
                {
                  buildHookId: '5fcf95fb88cedff2d16cb485',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1f359wmp',
                  apiId: '748728ea-7852-4521-8451-2ef826b25941'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/noeljeremydiatta/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1f359wmp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
