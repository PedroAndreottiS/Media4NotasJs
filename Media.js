alert("calculo de média");

let nota1 = Number (prompt ("Digite a primeira nota do Aluno (0 a 10): "))
let nota2 = Number (prompt ("Digite a segunda nota do Aluno (0 a 10): "))
let nota3 = Number (prompt ("Digite a terceira nota do Aluno (0 a 10): "))
let nota4 = Number (prompt ("Digite a quarta nota do Aluno (0 a 10): "))

if (nota1 < 0 || nota1 > 10
    || nota2 < 0 || nota2 > 10
    || nota3 < 0 || nota3 > 10
    || nota4 < 0 || nota4 > 10) {
    alert('Digite somente notas entre 0 e 10.')
}

else {
    let total = (nota1 + nota2 + nota3 + nota4)
    let divisao = (total / 4)

    if (divisao < 5) {
        alert(`Voce ficou com media ${divisao.toFixed(1)}. Resultado: Reprovado`)
    }
    else if (divisao < 6) {
        alert(`Voce ficou com media ${divisao.toFixed(1)}. Resultado: Em recuperacao`)
    }
    else {
        alert(`Voce ficou com media ${divisao.toFixed(1)}. Resultado: Aprovado`)
    }
}



/*double n1, n2, n3, n4, media;
string resultado;

Console.WriteLine("-- Média --\n");
Console.WriteLine("Digite as suas notas abaixo.");

Console.Write("Nota 1: ");
n1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Nota 2: ");
n2 = Convert.ToDouble(Console.ReadLine());

Console.Write("Nota 3: ");
n3 = Convert.ToDouble(Console.ReadLine());

Console.Write("Nota 4: ");
n4 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine();

if (n1 < 0 || n1 > 10
 || n2 < 0 || n2 > 10
 || n3 < 0 || n3 > 10
 || n4 < 0 || n4 > 10)
{
    Console.WriteLine("Digite somente notas entre 0 e 10.");
}
else
{
    media = (n1 + n2 + n3 + n4) / 4;

    if (media < 5)
    {
        resultado = "Reprovado";
    }
    else if (media > 6)
    {
        resultado = "Aprovado";
    }
    else
    {
        resultado = "Em recuperação";
    }

    Console.WriteLine($"Você ficou com média {media:N1}. Resultado: {resultado}");
}*/