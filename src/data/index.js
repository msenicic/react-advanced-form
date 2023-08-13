import * as yup from "yup";
import { nanoid } from 'nanoid';

const requiredMessage = 'This field is required.';
const stringMessage   = 'This field needs to be valid string (text).';
const numberMessage   = 'This field needs to be valid number.';
const positiveMessage = 'This field needs to be positive number.';
const emailMessage    = 'Please enter proper email address.';

export const DATA_FORM_SCHEMA = yup.object().shape({
    Yacht: yup.string(stringMessage).required(requiredMessage),
    Owner: yup.string(stringMessage).required(requiredMessage),
    Sailnumber: yup.string(stringMessage).required(requiredMessage),
    Address1: yup.string(stringMessage),
    Designer: yup.string(stringMessage),
    ZIP: yup.string(stringMessage),
    City: yup.string(stringMessage),
    Builder: yup.string(stringMessage),
    Address2: yup.string(stringMessage),
    Class: yup.string(stringMessage).required(requiredMessage),
    Country: yup.string(stringMessage).required(requiredMessage),
    Age: yup.string(stringMessage).required(requiredMessage),
    Email: yup.string(stringMessage).email(emailMessage).required(requiredMessage),
    Tel: yup.string(stringMessage).required(requiredMessage),
    Events: yup.string(stringMessage),
    Units: yup.string(stringMessage).required(requiredMessage),
    P: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    IG: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    ISP: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    E: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    BAS: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    J: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MDT1: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MDL1: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SPL: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    TPS: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    Spreaders: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    Runners: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    HB: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MGT: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MGU: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MGM: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    MGL: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JH: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGT: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGU: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGM: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGL: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    LPG: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JL: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JH_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGT_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGU_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGM_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JGL_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    LPG_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    JL_FLY: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SL: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SL_E: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SMG: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SF: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SLU: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    SLE: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    AMG: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    ASF: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    PRD: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    CrewWeight: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
    Displacement: yup.number(numberMessage).positive(positiveMessage).nullable(true).transform((value) => (isNaN(value)) ? null : value),
});

export const FORM_DATA = [
    [
        {
            id: nanoid(),
            title: 'Boat',
            class: 'medium',
            inputs: [
                {
                    id: nanoid(),
                    name: 'Yacht',
                    label: 'Yacht name',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Sailnumber',
                    label: 'Sail number',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Designer',
                    label: 'Designer',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'Builder',
                    label: 'Builder',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'Class',
                    label: 'Class',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Age',
                    label: 'Age Date',
                    type: 'select',
                    required: true,
                    options: [
                        { value: '', label: 'Select ...' },
                        { value: '2020', label: '2020' },
                        { value: '2019', label: '2019' },
                        { value: '2018', label: '2018' },
                        { value: '2017', label: '2017' },
                        { value: '2016', label: '2016' },
                        { value: '2015', label: '2015' },
                        { value: '2014', label: '2014' },
                        { value: '2013', label: '2013' },
                        { value: '2012', label: '2012' },
                        { value: '2011', label: '2011' },
                        { value: '2010', label: '2010' },
                        { value: '2009', label: '2009' },
                        { value: '2008', label: '2008' },
                        { value: '2007', label: '2007' },
                        { value: '2006', label: '2006' },
                        { value: '2005', label: '2005' },
                        { value: '2004', label: '2004' },
                        { value: '2003', label: '2003' },
                        { value: '2002', label: '2002' },
                        { value: '2001', label: '2001' },
                        { value: '2000', label: '2000' },
                        { value: '1999', label: '1999' },
                        { value: '1998', label: '1998' },
                        { value: '1997', label: '1997' },
                        { value: '1996', label: '1996' },
                        { value: '1995', label: '1995' },
                        { value: '1994', label: '1994' },
                        { value: '1993', label: '1993' },
                        { value: '1992', label: '1992' },
                        { value: '1991', label: '1991' },
                        { value: '1990', label: '1990' },
                        { value: '1989', label: '1989' },
                        { value: '1988', label: '1988' },
                        { value: '1987', label: '1987' },
                        { value: '1986', label: '1986' },
                        { value: '1985', label: '1985' },
                        { value: '1984', label: '1984' },
                        { value: '1983', label: '1983' },
                        { value: '1982', label: '1982' },
                        { value: '1981', label: '1981' },
                        { value: '1980', label: '1980' },
                        { value: '1979', label: '1979' },
                        { value: '1978', label: '1978' },
                        { value: '1977', label: '1977' },
                        { value: '1976', label: '1976' },
                        { value: '1975', label: '1975' },
                        { value: '1974', label: '1974' },
                        { value: '1973', label: '1973' },
                        { value: '1972', label: '1972' },
                        { value: '1971', label: '1971' },
                        { value: '1970', label: '1970' },
                    ]
                },
            ]   
        },
        {
            id: nanoid(),
            title: 'Owner',
            class: 'medium',
            inputs: [
                {
                    id: nanoid(),
                    name: 'Owner',
                    label: 'Name',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Address1',
                    label: 'Address',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'ZIP',
                    label: 'ZIP Code',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'City',
                    label: 'City',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'Address2',
                    label: 'State/province',
                    type: 'text',
                    required: false
                },
                {
                    id: nanoid(),
                    name: 'Country',
                    label: 'Country',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Email',
                    label: 'Email',
                    type: 'text',
                    required: true
                },
                {
                    id: nanoid(),
                    name: 'Tel',
                    label: 'Phone',
                    type: 'text',
                    required: true
                },
            ]
        },
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'Events',
                    label: 'Event(s) for which certificate is needed',
                    type: 'textarea',
                    required: false
                },
            ]
        },
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'Units',
                    label: 'Measurement units',
                    type: 'radio',
                    required: true,
                    options: [
                        { value: '1', label: 'Meters / Kilograms' },
                        { value: '0', label: 'Feet / Pounds' },
                    ]
                },
            ]
        }
    ],
    [
        {
            id: nanoid(),
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'P',
                    label: 'P',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'P measurement',
                        content: `
                            P is the distance between the black bands on the mast (or white bands on black masts) that are limiting the position of the mainsail luff - while racing the mainsail luff must be between these bands. In the absence of an upper or lower black band, P is measured to the upper part of the main halyard sheave from the point where the top of the boom intersects the mast.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'IG',
                    label: 'IG',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'IG measurement',
                        content: `
                            IG is defined as the height of the foretriangle and is the vertical distance from the mast datum point (at the sheerline at the mast) to the forestay attachment to the mast.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'ISP',
                    label: 'ISP',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'ISP measurement',
                        content: `
                            ISP is the spinnaker halyard height and is the maximum height that the head of the spinnaker can be hoisted measured from the mast datum point (at the sheerline at the mast).
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'E',
                    label: 'E',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'E measurement',
                        content: `
                            E is the measured distance from the aft side of the mast to the black band on the boom (or white band on black booms) that limits the position to which mainsail foot may be extended. In the absence of the black band, it shall be measured to the point on the boom as aft as the mainsail clew can reach.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'BAS',
                    label: 'BAS',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'BAS measurement',
                        content: `
                            BAS is the height from the mast datum point (at the sheerline at the mast) to the boom or lower black band on the mast. It is used also as a reference point for the halyards hoist measurements on the mast.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'J',
                    label: 'J',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'J measurement',
                        content: `
                            J is probably the best-known measurement on boat, since it is used to define the size of headsails. It is defined as the horizontal distance between the front side of the mast and the intersection of the forestay with the deck.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MDT1',
                    label: 'MDT1',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mast profile measurements',
                        content: `
                            Mast profile measurements include the maximum dimensions transversely (MDT1) and fore and aft (MDL1).
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MDL1',
                    label: 'MDL1',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mast profile measurements',
                        content: `
                            Mast profile measurements include the maximum dimensions transversely (MDT1) and fore and aft (MDL1).
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'SPL',
                    label: 'SPL',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'SPL measurements',
                        content: `
                            Spinnaker pole length (SPL) is measured when the pole is forced outboard on its fitting to the mast in a horizontal position athwarthsips, from the boat's centerline to the extreme end of the pole.<br /><br />
                            You can leave it blank if you are not using a spinnaker pole.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'TPS',
                    label: 'TPS',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'TPS measurements',
                        content: `
                            The tack point of spinnaker (TPS) when it is tacked on the boat's centerline is the distance from the foreside of the mast to the foremost point on which the asymmetric spinnaker can be tacked. If the bowsprit is retractable, TPS shall be measured with it in its fully-extended position.<br /><br />
                            You can leave it blank if you do not have a spinnaker tacked on the boat's centerline.
                        `
                    }
                },
            ]
        },
        {
            id: nanoid(),
            class: 'medium',
            inputs: [
                {
                    id: nanoid(),
                    name: 'ForestayTension',
                    label: 'Forestay control',
                    type: 'select',
                    required: false,
                    options: [
                        { value: '99', label: 'Select ...' },
                        { value: '0', label: 'Aft' },
                        { value: '1', label: 'Forward' },
                        { value: '3', label: 'Aft & Forward' },
                        { value: '2', label: 'Fixed' },
                    ],
                    tooltip: {
                        title: 'Forestay tension',
                        content: `
                            If the uppermost backstay is adjustable, this shall be recorded as "Aft"<br/ ><br />
                            If the forestay is adjustable and backstay is fixed, this shall be recorded as "Forward".<br/ ><br />
                            If the forestay is adjustable and backstay is adjustable, this shall be recorded as "Aft & Forward".<br/ ><br />
                            If neither the uppermost backstay nor the forestay itself is adjustable, this shall be recorded as "Fixed".
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'InnerForestay',
                    label: 'Inner forestay',
                    type: 'select',
                    required: false,
                    options: [
                        { value: '99', label: 'Select ...' },
                        { value: '0', label: 'Adjustable' },
                        { value: '1', label: 'Fixed' },
                        { value: '2', label: 'None Fitted' },
                    ],
                    tooltip: {
                        title: '',
                        content: `
                            If there is an inner stay, and if the tension may be adjusted, this be recorded as "Adjustable"<br/ ><br />
                            If the inner stay tension can not be adjsuted, this shall be recorder as "Fixed"<br/ ><br />
                            If there is no inner forestay, this shall be recorded as "None Fitted".
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'FiberRig',
                    label: 'Fiber rigging',
                    type: 'checkbox',
                    required: false,
                    options: false,
                    tooltip: {
                        title: '',
                        content: `
                            Select "Yes" if if any part of the standing rigging is made of any fiber
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'CarbonMast',
                    label: 'Carbon mast',
                    type: 'checkbox',
                    required: false,
                    options: false,
                    tooltip: {
                        title: '',
                        content: `
                            Select "Yes" if the mast is made of carbon.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MainFurler',
                    label: 'Main furler',
                    type: 'checkbox',
                    required: false,
                    options: false,
                    tooltip: {
                        title: '',
                        content: `
                            Select "Yes" if there is a mainsail furler in the mast.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'Dacron',
                    label: 'Dacron sails',
                    type: 'checkbox',
                    required: false,
                    options: false,
                    tooltip: {
                        title: '',
                        content: `
                            Select "Yes" if the mainsail and all headsails are made of woven polyester.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'GenoaFurler',
                    label: 'Headsail furler',
                    type: 'checkbox',
                    required: false,
                    options: false,
                    tooltip: {
                        title: '',
                        content: `
                            Check this box if there is a headsail furler with HLP > 110% of J used in association with one headsail only.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'Spreaders',
                    label: 'Number of spreaders',
                    type: 'number',
                    required: false,
                    tooltip: {
                        title: 'Spreaders',
                        content: `
                            Insert number of spreaders
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'Runners',
                    label: 'Number of runners',
                    type: 'number',
                    required: false,
                    tooltip: {
                        title: 'Runners',
                        content: `
                            Insert number of running backstays and checkstays. The number of pairs shall be recorded.
                        `
                    }
                },
            ]
        },
    ],
    [
        {
            id: nanoid(),
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'HB',
                    label: 'MHB',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mainsail measurements',
                        content: `
                            The mainsail is measured with width at the top (<strong><em>MHB</em></strong>) and four widths found on the leach between head and clew: at 1/4 (<strong><em>MQW</em></strong>), 1/2 (<strong><em>MHW</em></strong>), 3/4 (<strong><em>MTW</em></strong>) and 7/8 (<strong><em>MUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points.<br /><br />
                            Mainsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MGT',
                    label: 'MUW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mainsail measurements',
                        content: `
                            The mainsail is measured with width at the top (<strong><em>MHB</em></strong>) and four widths found on the leach between head and clew: at 1/4 (<strong><em>MQW</em></strong>), 1/2 (<strong><em>MHW</em></strong>), 3/4 (<strong><em>MTW</em></strong>) and 7/8 (<strong><em>MUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points.<br /><br />
                            Mainsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MGU',
                    label: 'MTW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mainsail measurements',
                        content: `
                            The mainsail is measured with width at the top (<strong><em>MHB</em></strong>) and four widths found on the leach between head and clew: at 1/4 (<strong><em>MQW</em></strong>), 1/2 (<strong><em>MHW</em></strong>), 3/4 (<strong><em>MTW</em></strong>) and 7/8 (<strong><em>MUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points.<br /><br />
                            Mainsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MGM',
                    label: 'MHW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mainsail measurements',
                        content: `
                            The mainsail is measured with width at the top (<strong><em>MHB</em></strong>) and four widths found on the leach between head and clew: at 1/4 (<strong><em>MQW</em></strong>), 1/2 (<strong><em>MHW</em></strong>), 3/4 (<strong><em>MTW</em></strong>) and 7/8 (<strong><em>MUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points.<br /><br />
                            Mainsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'MGL',
                    label: 'MQW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Mainsail measurements',
                        content: `
                            The mainsail is measured with width at the top (<strong><em>MHB</em></strong>) and four widths found on the leach between head and clew: at 1/4 (<strong><em>MQW</em></strong>), 1/2 (<strong><em>MHW</em></strong>), 3/4 (<strong><em>MTW</em></strong>) and 7/8 (<strong><em>MUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points.<br /><br />
                            Mainsail measurements can be provided by your sailmaker.
                        `
                    }
                },
            ]
        },
    ],
    [
        {
            id: nanoid(),
            title: 'Set on the forestay',
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'JH',
                    label: 'HHB',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGT',
                    label: 'HUW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGU',
                    label: 'HTW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGM',
                    label: 'HHW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGL',
                    label: 'HQW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'LPG',
                    label: 'HLP',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JL',
                    label: 'HLU',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
            ]
            
        },
        {
            id: nanoid(),
            title: 'Set flying',
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'JH_FLY',
                    label: 'HHB',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGT_FLY',
                    label: 'HUW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGU_FLY',
                    label: 'HTW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGM_FLY',
                    label: 'HHW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JGL_FLY',
                    label: 'HQW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'LPG_FLY',
                    label: 'HLP',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'JL_FLY',
                    label: 'HLU',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Headsail measurements',
                        content: `
                            Headsail measurements are similar to those of the mainsail, including the top width (<strong><em>HHB</em></strong>) as well as four widths found on the leach between head and the clew: at 1/4 (<strong><em>HQW</em></strong>), 1/2 (<strong><em>HHW</em></strong>), 3/4 (<strong><em>HTW</em></strong>) and 7/8 (<strong><em>HUW</em></strong>) leech heights. Points on the leech are found by folding the sail to find equal distances between clew and head or between two adjacent measurement points. Additional measurements for headsails are: luff length (<strong><em>HLU</em></strong>) and luff perpendicular (<strong><em>HLP</em></strong>) as the shortest distance from the clew point to the luff.<br /><br />
                            If there is no any roach it is enough to enter <strong><em>HLP</em></strong> and <strong><em>HLU</em></strong> only.<br /><br />
                            Headsail measurements can be provided by your sailmaker.
                        `
                    }
                },
            ]
        },
    ],
    [
        {
            id: nanoid(),
            title: 'Symmetric',
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'SL',
                    label: 'SLU',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Symmetric spinnaker measurements',
                        content: `
                            The symmetric spinnaker shall be <strong><em>symmetric</em></strong> in shape, material and cut, about a line joining the head to the center of the foot.<br /><br />
                            Symmetric spinnaker measurements include: leech length (<strong><em>SLU = SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SFL</em></strong>).<br /><br />
                            Symmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'SL_E',
                    label: 'SLE',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Symmetric spinnaker measurements',
                        content: `
                            The symmetric spinnaker shall be <strong><em>symmetric</em></strong> in shape, material and cut, about a line joining the head to the center of the foot.<br /><br />
                            Symmetric spinnaker measurements include: leech length (<strong><em>SLU = SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SFL</em></strong>).<br /><br />
                            Symmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'SMG',
                    label: 'SHW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Symmetric spinnaker measurements',
                        content: `
                            The symmetric spinnaker shall be <strong><em>symmetric</em></strong> in shape, material and cut, about a line joining the head to the center of the foot.<br /><br />
                            Symmetric spinnaker measurements include: leech length (<strong><em>SLU = SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SFL</em></strong>).<br /><br />
                            Symmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'SF',
                    label: 'SFL',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Symmetric spinnaker measurements',
                        content: `
                            The symmetric spinnaker shall be <strong><em>symmetric</em></strong> in shape, material and cut, about a line joining the head to the center of the foot.<br /><br />
                            Symmetric spinnaker measurements include: leech length (<strong><em>SLU = SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SFL</em></strong>).<br /><br />
                            Symmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
            ]
        },
        {
            id: nanoid(),
            title: 'Asymmetric',
            class: 'small',
            inputs: [
                {
                    id: nanoid(),
                    name: 'SLU',
                    label: 'SLU',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Asymmetric spinnaker measurements',
                        content: `
                            Any spinnaker not qualifying as symmetric shall be considered as <strong><em>asymmetric</em></strong>.<br /><br />
                            Asymmetric spinnaker measurements include: luff length (<strong><em>SLU</em></strong>), leech length (<strong><em>SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SGL</em></strong>).<br /><br />
                            Asymmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'SLE',
                    label: 'SLE',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Asymmetric spinnaker measurements',
                        content: `
                            Any spinnaker not qualifying as symmetric shall be considered as <strong><em>asymmetric</em></strong>.<br /><br />
                            Asymmetric spinnaker measurements include: luff length (<strong><em>SLU</em></strong>), leech length (<strong><em>SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SGL</em></strong>).<br /><br />
                            Asymmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'AMG',
                    label: 'SHW',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Asymmetric spinnaker measurements',
                        content: `
                            Any spinnaker not qualifying as symmetric shall be considered as <strong><em>asymmetric</em></strong>.<br /><br />
                            Asymmetric spinnaker measurements include: luff length (<strong><em>SLU</em></strong>), leech length (<strong><em>SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SGL</em></strong>).<br /><br />
                            Asymmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'ASF',
                    label: 'SFL',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Asymmetric spinnaker measurements',
                        content: `
                            Any spinnaker not qualifying as symmetric shall be considered as <strong><em>asymmetric</em></strong>.<br /><br />
                            Asymmetric spinnaker measurements include: luff length (<strong><em>SLU</em></strong>), leech length (<strong><em>SLE</em></strong>), half width (<strong><em>SHW</em></strong>) as the distance between midpoints on the luff and leech and the foot length (<strong><em>SGL</em></strong>).<br /><br />
                            Asymmetric spinnaker measurements can be provided by your sailmaker.
                        `
                    }
                },
            ]
        },
    ],
    [
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'PropInst',
                    label: 'Propeller',
                    type: 'radio',
                    required: false,
                    clickEvent: false,
                    options: [
                        { value: '2', label: 'Strut drive', image: '/assets/appForm/mobile/propeller/strut-drive.svg' },
                        { value: '0', label: 'Shaft (exposed)', image: '/assets/appForm/mobile/propeller/shaft-exposed.svg' },
                        { value: '3', label: 'Shaft (not exposed)', image: '/assets/appForm/mobile/propeller/shaft-not-exposed.svg' },
                        { value: '1', label: 'In aperture', image: '/assets/appForm/mobile/propeller/in-aperture.svg' },
                        { value: '4', label: 'No propeller', image: '/assets/appForm/mobile/propeller/no-propeller.svg' },
                    ]
                },
            ]
        },
        {
            id: nanoid(),
            class: 'medium',
            inputs: [
                {
                    id: nanoid(),
                    name: 'PropType',
                    label: 'Propeller type',
                    type: 'select',
                    required: false,
                    options: [
                        { value: '99', label: 'Select ...' },
                        { value: '3', label: 'Folding 2 blades' },
                        { value: '6', label: 'Folding 3 blades' },
                        { value: '1', label: 'Solid 2 blades' },
                        { value: '4', label: 'Solid 3 blades' },
                        { value: '2', label: 'Feathering 2 blades' },
                        { value: '5', label: 'Feathering 3 blades' },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'PRD',
                    label: 'Prop. diameter',
                    type: 'number',
                    required: false,
                    clickEvent: false
                }
            ]
        },
    ],
    [
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'IMSRegulations',
                    label: 'Accommodation Regulations',
                    type: 'radio',
                    required: false,
                    options: [
                        { value: '2', label: 'Cruiser/Racer' },
                        { value: '1', label: 'Performance' },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'NonManualPower',
                    label: 'Non-manual power',
                    type: 'radio',
                    required: false,
                    options: [
                        { value: '0', label: 'No' },
                        { value: '2', label: 'Rig' },
                        { value: '3', label: 'Sheets' },
                        { value: '1', label: 'Rig & Sheets' },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'HullConstruction',
                    label: 'Hull Construction',
                    type: 'radio',
                    required: false,
                    options: [
                        { value: '0', label: 'Light or other' },
                        { value: '1', label: 'Cored' },
                        { value: '2', label: 'Solid' },
                        { value: '3', label: 'Carbon' },
                    ]
                },
            ]
        },
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'CrewWeight',
                    label: 'Crew weight',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Crew Weight',
                        content: `
                            The weight of all crew members on board while racing. If not declared a default figure is calculated and listed on the certificate.<br /><br />
                            The crew shall not be heavier than the value recorded on the certificate. The owner can always declare enough margin that will put him on safe side of this requirement.
                        `
                    }
                },
                {
                    id: nanoid(),
                    name: 'Displacement',
                    label: 'Displacement',
                    type: 'number',
                    required: false,
                    clickEvent: true,
                    tooltip: {
                        title: 'Displacement',
                        content: `
                            The weight of the complete boat in measurement trim in light ship conditions without any sails and equipment aboard. An easy explanation of lightship measurement trim would be that if the boat is rotated upside down, everything that falls out shall not be on board.
                        `
                    }
                },
            ]
        },
        {
            id: nanoid(),
            class: 'large',
            inputs: [
                {
                    id: nanoid(),
                    name: 'Comments',
                    label: 'Other comments',
                    type: 'textarea',
                    required: false,
                    clickEvent: false
                },
            ]
        },
    ]
]