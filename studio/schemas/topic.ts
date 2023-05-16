import { defineField, defineType } from "sanity";

export default defineType({
    name: "topic",
    title: "Topic",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug/Path",
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        })
    ]
})