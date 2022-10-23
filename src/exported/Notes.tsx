import IconNotesFill0Wght100Grad0Opsz48 from '../components/NotesFill0Wght100Grad0Opsz48'
import IconNotesFill0Wght200Grad0Opsz48 from '../components/NotesFill0Wght200Grad0Opsz48'
import IconNotesFill0Wght300Grad0Opsz48 from '../components/NotesFill0Wght300Grad0Opsz48'
import IconNotesFill0Wght400Grad0Opsz48 from '../components/NotesFill0Wght400Grad0Opsz48'
import IconNotesFill0Wght500Grad0Opsz48 from '../components/NotesFill0Wght500Grad0Opsz48'
import IconNotesFill0Wght600Grad0Opsz48 from '../components/NotesFill0Wght600Grad0Opsz48'
import IconNotesFill0Wght700Grad0Opsz48 from '../components/NotesFill0Wght700Grad0Opsz48'
import IconNotesFill1Wght100Grad0Opsz48 from '../components/NotesFill1Wght100Grad0Opsz48'
import IconNotesFill1Wght200Grad0Opsz48 from '../components/NotesFill1Wght200Grad0Opsz48'
import IconNotesFill1Wght300Grad0Opsz48 from '../components/NotesFill1Wght300Grad0Opsz48'
import IconNotesFill1Wght400Grad0Opsz48 from '../components/NotesFill1Wght400Grad0Opsz48'
import IconNotesFill1Wght500Grad0Opsz48 from '../components/NotesFill1Wght500Grad0Opsz48'
import IconNotesFill1Wght600Grad0Opsz48 from '../components/NotesFill1Wght600Grad0Opsz48'
import IconNotesFill1Wght700Grad0Opsz48 from '../components/NotesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotes = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
