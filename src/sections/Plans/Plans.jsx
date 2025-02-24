import Section from "@/layouts/Section"
import TabsNavigation from "@/components/Tabs/components/TabsNavigation"
import Tabs from "@/components/Tabs"

import planGroups from "./planGroups"
import Grid from "@/components/Grid"
import PlanCard from "@/components/PlanCard"

const Plans = () => {
  const tabsTitle = "plans-tabs"
  const tabsNavigationId = "plans-tabs-navigation"

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroups}
        />
      }
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planGroups.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (
            <Grid columns={3}>
              {planGroup.items.map((planItem, i) => (
                <PlanCard {...planItem} key={i} />
              ))}
            </Grid>
          ),
        }))}
      />
    </Section>
  )
}
export default Plans
