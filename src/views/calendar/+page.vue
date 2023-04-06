<script setup lang="ts">
import DaySpanVuetify from 'dayspan-vuetify'
</script>

<template>
  <!-- all props are optional -->
  <pro-calendar
    :events="void 0"
    :loading="false"
    :config="void 0"
    view="week"
    date="'isoStringDate'"
    @calendarClosed="void 0"
    @fetchEvents="void 0"
  >
    <template #leftSwitchArrow>
      <!-- replace left switch arrow with this slot -->
    </template>

    <template #rightSwitchArrow>
      <!-- replace left switch arrow with this slot -->
    </template>

    <template #closeButton>
      <!-- replace close button with this slot -->
    </template>

    <template #loader="{ calendarGotLoading }">
      <!-- replace calendar loader with this slot -->
    </template>

    <template #searchIcon>
      <!-- replace search widget icon with this slot -->
    </template>

    <template #dateLeftArrow>
      <!-- replace date picker left arrow with this -->
    </template>

    <template #dateRightArrow>
      <!-- replace date picker right arrow with this -->
    </template>

    <template #sideEvent="{ dateSelected, calendarEvents }">
      <!-- use this slot to show yourself side events in appearance you want -->
      <!--
      dateSelected: Date;
      calendarEvents: Appointment[]; // all events
    -->
    </template>

    <template #eventCard="{ date, time, cardEvent }">
      <!-- use this slot to show yourself calendar event in appearance you want -->
      <!--
      date: Date;
      time: string;
      cardEvent: Appointment[]; // events according to date/time
    -->
    </template></pro-calendar
  >
</template>
