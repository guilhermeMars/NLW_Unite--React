import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';
import { attendees } from '../data/attendees';

export function AttendeeList(){
    return(
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2x1 font-bold">Participantes</h1>
                {/* As classes da div, tirando do flex pra frente, estavam no input, porém passaram pra ela pra colocar o ícone */}
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Buscar participante... "/>
                </div>
            </div>
            
            {/* Não dá pra colocar arredondamento na borda da tabela, logo coloca dentro de uma div */}
            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 64 }}>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10'/>
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de Inscrição</TableHeader>
                        <TableHeader>Data do Check-in</TableHeader>
                        {/* São utilizadas duas "{}" por conta de passar um objeto como parametro. Objeto no JS também é "{}" */}
                        {/* Não entendi o porquê de ter utilizado a prop style, mas acredito que seja algo específico das tables HTML */}
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {/* {Array.from({ length: 8 }).map((_, chave) => {
                        return(
                            <TableRow key={chave}>
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 '/>
                                </TableCell>
                                <TableCell>23123</TableCell>
                                <TableCell>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-white'>Guilherme Martins Spiandorin</span>
                                        <span>guilhermemspiandorin@gmail.com</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 dias atrás</TableCell>
                                <TableCell>3 dias atrás</TableCell>
                                <TableCell>
                                    {/* Acho que nem precisava colocar o bg-black/20, mas tudo bem kkkkkk 
                                    <IconButton transparent>
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })} */}
                    {attendees.map((attendee) => {
                        return(
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 '/>
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-white'>{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{formatRelative(attendee.createdAt, new Date(), { locale: ptBR })}</TableCell>
                                <TableCell>{formatRelative(attendee.checkedInAt, new Date(), { locale: ptBR })}</TableCell>
                                <TableCell>
                                    {/* Acho que nem precisava colocar o bg-black/20, mas tudo bem kkkkkk */}
                                    <IconButton transparent>
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <TableCell colSpan={3}>
                        Mostrando 10 de 228
                    </TableCell>
                    <TableCell className="text-right" colSpan={3}>
                        <div className='inline-flex items-center gap-8'>
                            Página 1 de 23
                            
                            <div className='flex gap-1.5'>
                                <IconButton>
                                    <ChevronsLeft className='size-4' />
                                </IconButton>
                                <IconButton>
                                    <ChevronLeft className='size-4' />
                                </IconButton>
                                <IconButton>
                                    <ChevronRight className='size-4' />
                                </IconButton>
                                <IconButton>
                                    <ChevronsRight className='size-4' />
                                </IconButton>
                            </div>
                        </div>
                    </TableCell>
                </tfoot>
            </Table>
        </div>
    );
}