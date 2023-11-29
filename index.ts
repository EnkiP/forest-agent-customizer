import { Agent } from '@forestadmin/agent';


export default function customizeAgent(agent: Agent) {
  agent.customizeCollection("Tabletrucs", (collection) => {
    collection.addField("customField", {
      columnType: "Number",
      dependencies: ["id"],
      getValues(records, context) {
        return records.map(({id}) => id + 1);
      }
    })
  })
}